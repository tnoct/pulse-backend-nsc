import mongoose, { Schema } from "mongoose";
import type { IProjectMetrics } from "../types/metrics.types";

const ProjectMetricsSchema = new Schema<IProjectMetrics>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["active", "completed", "on-hold", "cancelled"],
        required: true,
    },
    completionRate: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    activeUsers: {
        type: Number,
        required: true,
        min: 0,
    },
    timestamp: {
        type: Date,
        required: true,
        default: () => new Date(),
    },
});

export const ProjectMetrics = mongoose.model<IProjectMetrics>(
    "ProjectMetrics",
    ProjectMetricsSchema,
);
