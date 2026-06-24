import { ProjectMetrics } from "../models/metrics.model";
import type { IProjectMetrics } from "../types/metrics.types";

type SeedRecord = Pick<
    IProjectMetrics,
    "name" | "status" | "completionRate" | "activeUsers" | "timestamp"
>;

const seedRecords: SeedRecord[] = [
    {
        name: "Alpha Dashboard",
        status: "active",
        completionRate: 72,
        activeUsers: 34,
        timestamp: new Date("2026-01-10"),
    },
    {
        name: "Beta Analytics Engine",
        status: "completed",
        completionRate: 100,
        activeUsers: 0,
        timestamp: new Date("2026-02-14"),
    },
    {
        name: "Gamma Mobile App",
        status: "active",
        completionRate: 58,
        activeUsers: 120,
        timestamp: new Date("2026-03-05"),
    },
    {
        name: "Delta Reporting Suite",
        status: "on-hold",
        completionRate: 41,
        activeUsers: 7,
        timestamp: new Date("2026-04-01"),
    },
    {
        name: "Epsilon Notification Service",
        status: "active",
        completionRate: 88,
        activeUsers: 62,
        timestamp: new Date("2026-05-20"),
    },
    {
        name: "Zeta Auth Module",
        status: "cancelled",
        completionRate: 23,
        activeUsers: 0,
        timestamp: new Date("2026-06-01"),
    },
];

export const seedDatabase = async (): Promise<void> => {
    const count = await ProjectMetrics.countDocuments();
    if (count > 0) {
        console.log("Database already seeded, skipping.");
        return;
    }

    await ProjectMetrics.insertMany(seedRecords);
    console.log(
        `Database has been seeded 🌱, with ${seedRecords.length} objects.`,
    );
};
