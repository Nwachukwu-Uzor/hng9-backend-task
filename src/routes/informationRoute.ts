import * as express from "express";
import { sendInformation } from "../controllers/informationController";

const router = express.Router();

router.get("/", sendInformation);

export default router;
