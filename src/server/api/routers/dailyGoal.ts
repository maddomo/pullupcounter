import { router, protectedProcedure } from "../trpc";
import { dailyGoalSchema } from "~/app/utils/zodSchema";

export const dailyGoalRouter = router({

  createDailyGoal: protectedProcedure.input(dailyGoalSchema).mutation(async ( { input, ctx} ) => {
      const userId = ctx.user?.id;
      if(!userId){
        return
      }
      return await ctx.db.$transaction(async (tx) => {
        const dailyGoal = await tx.dailyGoal.upsert({
          where: { userId },
          update: {
            pullups: input.pullups,
            pushups: input.pushups,
            situps: input.situps,
            pullupsCount: input.pullupsCount,
            pushupsCount: input.pushupsCount,
            situpsCount: input.situpsCount,
          },
          create: {
            userId,
            pullups: input.pullups,
            pushups: input.pushups,
            situps: input.situps,
            pullupsCount: input.pullupsCount,
            pushupsCount: input.pushupsCount,
            situpsCount: input.situpsCount,
          },
        });

        await tx.userProfile.update({
          where: { id: userId },
          data: { hasDailyGoal: true },
        });

        return dailyGoal;
      });
    }),



})
