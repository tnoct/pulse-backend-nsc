import { Router } from "express";
import * as metricsController from "../controllers/metrics.controller";

const router = Router();

router.get("/metrics", metricsController.getMetrics);

export default router;
