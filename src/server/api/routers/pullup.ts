import { router, protectedProcedure } from "../trpc";
import { z } from "zod";

export const pullupsRouter = router({

  getAll: protectedProcedure.query(async ( { ctx } ) => {
    const { supabase, user } = ctx; 
    const { data, error } = await supabase
      .from("PullupSession")
      .select("count, createdAt")
      .eq("userId", user.id)
      .order("createdAt", {ascending: true});

    if(error) throw new Error(error.message);

    return data ?? [];
  }),

  addPullUps: protectedProcedure.input(z.object({
    count: z.number().min(1)
  })).mutation(async ( { input, ctx} ) => {
    const userId = ctx.user?.id;
    if(!userId){
      return
    }
    return ctx.db.pullupSession.create({
      data: {
        count: input.count,
        deviceId: "mobile",
        userId: userId
      }
    })
  })
})
