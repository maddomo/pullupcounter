import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { supabase } from '../../../supabase/client'

export const pullupsRouter = router({

  getAll: publicProcedure.query(async () => {
    const { data, error } = await supabase.from("PullupSession").select("count, createdAt").order("createdAt", {ascending: true});

    if(error) throw new Error(error.message);

    return data ?? [];
  }),

  addPullUps: publicProcedure.input(z.object({
    count: z.number().min(1)
  })).mutation(async ( { input, ctx} ) => {
    const userId = process.env.DEFAULT_USER_ID;
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
