import express from 'express';
import { getRatedRestaurationsByRestaurationId, getRatedRestaurationsByUserId, rateRestaurant } from '../controllers/rateController.js';

const rateRouter = express.Router();

rateRouter.post('/', rateRestaurant);
rateRouter.get('/:res_id', getRatedRestaurationsByRestaurationId);
rateRouter.get('/:user_id', getRatedRestaurationsByUserId);

export default rateRouter;