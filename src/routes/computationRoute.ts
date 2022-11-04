import * as express from "express";
import { compute } from "../controllers/computationController";

const router = express.Router();

router.post("/", compute);

export default router;
