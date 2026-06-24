import { Router } from "express";
import metricsRouter from "./metrics.routes";

const router = Router();

router.use(metricsRouter);

export default router;
