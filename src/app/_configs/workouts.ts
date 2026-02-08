// configs/workouts.ts
import type { WorkoutSession } from "../_types/period";

export type WorkoutKey = "pullups" | "pushUps" | "situps";

export type WorkoutConfig<T extends WorkoutSession> = {
  key: WorkoutKey;
  label: string;
};



export const workoutConfigs = {
  pullups: {
    key: "pullups",
    label: "Pull-Ups",
  },

  pushups: {
    key: "pushUps",
    label: "Push-Ups",
  },

  situps: {
    key: "situps",
    label: "Sit-Ups",
  },
} as const;
