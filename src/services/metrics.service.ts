import { ProjectMetrics } from "../models/metrics.model";

export const getAllMetrics = async () => {
    return ProjectMetrics.find().lean().exec();
};
