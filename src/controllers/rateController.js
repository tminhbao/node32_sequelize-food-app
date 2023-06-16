import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

const models = initModels(sequelize);

export const rateRestaurant = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        const restaurant = await models.restaurant.findOne({ where: { res_id } });
        if (!restaurant) {
            res.status(404).json({
                message: 'Restaurant not found'
            })
            return;
        }
        await models.rate_res.create({
            user_id,
            res_id,
        })
        res.status(200).json({
            message: 'Rate restaurant successfully'
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getRatedRestaurationsByRestaurationId = async (req, res) => {
    try {
        let { res_id } = req.params;
        const restaurant = await models.restaurant.findOne({ where: { res_id } });
        if (!restaurant) {
            res.status(404).json({
                message: 'Restaurant not found'
            })
            return;
        }
        const data = await models.rate_res.findAll({
            include: ["user"], where: { res_id }
        })
        res.status(200).json({ message: 'Get rated restaurants by RestaurantID successfully', content: data })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getRatedRestaurationsByUserId = async (req, res) => {
    try {
        let { user_id } = req.params;
        const data = await models.rate_res.findAll({
            include: ["re"], where: { user_id }
        })
        res.status(200).json({ message: 'Get rated restaurants by RestaurantID successfully', content: data })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}


