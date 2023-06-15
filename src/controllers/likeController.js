import initModels from "../models/init-models.js"
import sequelize from "../models/index.js"

const models = initModels(sequelize)

export const likeRestaurant = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        await models.like_res.create({
            user_id,
            res_id,
            date_like: new Date().toISOString().slice(0, 19).replace('T', ' ')
        })
        res.status(200).json({
            message: 'Like Restaurant Successfully'
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const unlikeRestaurant = async (req, res) => {
    try {
        let { user_id, res_id } = req.params;
        const restaurant = await models.like_res.findAll({ where: { res_id: res_id } })
        if (!restaurant) {
            res.status(404).json({
                message: 'Restaurant not found'
            })
            return;
        }
        await models.like_res.destroy({ where: { user_id } })
        res.status(200).json({ message: 'Unlike Restaurant Successfully' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getLikedRestaurantsByRestaurantId = async (req, res) => {
    try {
        let { res_id } = req.params;
        const restaurant = await models.like_res.findAll({ where: { res_id: res_id } });
        if (!restaurant) {
            res.status(404).json({
                message: 'Restaurant not found'
            })
            return;
        }
        const data = await models.like_res.findAll({ where: { res_id } })
        res.status(200).json({ message: 'Get Liked Restaurants Successfully', content: data })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getLikedRestaurantsByUserId = async (req, res) => {
    try {
        let { user_id } = req.params;
        const data = await models.like_res.findAll({ where: { user_id } })
        res.status(200).json({ message: 'Get Liked Restaurants Successfully', content: data })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

