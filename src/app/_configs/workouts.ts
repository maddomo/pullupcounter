
export type WorkoutKey = "pullups" | "pushUps" | "situps";

export type WorkoutConfig = {
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
