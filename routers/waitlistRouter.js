import express from "express";
import { getWaitlist, addToWaitlist, getReponseByPhoneNumber } from "../controllers/waitlistAddController.js";
import phoneNumberCheck from "../middlewares/phoneNumberCheck.js";

const waitlistRouter = express.Router();

waitlistRouter.get('/', getWaitlist);
waitlistRouter.post('/', phoneNumberCheck, addToWaitlist);
waitlistRouter.get('/:phoneNumber', getReponseByPhoneNumber);

export default waitlistRouter;