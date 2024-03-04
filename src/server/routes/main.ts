import express, { Request, Response } from 'express';
import { createHouse, getHouses, getHousesV2 } from '../controllers/houseController';

const router = express.Router();

router.get('/houses', getHousesV2);
router.post('/houses', createHouse);

export default router;