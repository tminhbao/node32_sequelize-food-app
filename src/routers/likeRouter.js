import express from 'express'
import { getLikedRestaurantsByRestaurantId, getLikedRestaurantsByUserId, likeRestaurant, unlikeRestaurant } from '../controllers/likeController.js';

const likeRouter = express.Router();

likeRouter.post('/', likeRestaurant);
likeRouter.delete('/:user_id/:res_id', unlikeRestaurant);
likeRouter.get('/res/:res_id', getLikedRestaurantsByRestaurantId);
likeRouter.get('/user/:user_id', getLikedRestaurantsByUserId);

export default likeRouter;