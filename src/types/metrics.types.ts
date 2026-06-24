import type { Document } from "mongoose";

export type ProjectStatus = "active" | "completed" | "on-hold" | "cancelled";

export interface IProjectMetrics extends Document {
    name: string;
    status: ProjectStatus;
    completionRate: number;
    activeUsers: number;
    timestamp: Date;
}
