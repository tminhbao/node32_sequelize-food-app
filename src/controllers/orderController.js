import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";

const models = initModels(sequelize);

export const addOrder = async (req, res) => {
    try {
        let { user_id, food_id, amount, code, arr_sub_id } = req.body;
        console.log(req.body);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}