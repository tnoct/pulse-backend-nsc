import type { Request, Response, NextFunction } from "express";
import * as metricsService from "../services/metrics.service";

const getMetrics = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await metricsService.getAllMetrics();
        res.json({ success: true, count: data.length, data });
    } catch (error) {
        next(error);
    }
};

export { getMetrics };
