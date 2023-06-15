import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

const models = initModels(sequelize);

export const addOrder = async (req, res) => {
    try {
        let { user_id, food_id, amount, code, arr_sub_id } = req.body;
        await models.order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        })
        res.status(200).json({
            message: 'Add orders successfully'
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}