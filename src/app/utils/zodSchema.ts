import { z } from "zod";

export const dailyGoalSchema = z.object({
  pullups: z.boolean(),
  pushups: z.boolean(),
  situps: z.boolean(),
  pullupsCount: z.number().int(),
  pushupsCount: z.number().int(),
  situpsCount: z.number().int(),
});
