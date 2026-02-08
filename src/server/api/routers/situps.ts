import { router, protectedProcedure } from "../trpc";
import { z } from "zod";

export const sitUpsRouter = router({

  getAll: protectedProcedure.query(async ( { ctx } ) => {
    const { supabase, user } = ctx; 
    const { data, error } = await supabase
      .from("SitUps")
      .select("count, createdAt")
      .eq("userId", user.id)
      .order("createdAt", {ascending: true});

    if(error) throw new Error(error.message);

    return data ?? [];
  }),

  add: protectedProcedure.input(z.object({
    count: z.number().min(1)
  })).mutation(async ( { input, ctx} ) => {
    const userId = ctx.user?.id;
    if(!userId){
      return
    }
    return ctx.db.sitUps.create({
      data: {
        count: input.count,
        deviceId: "mobile",
        userId: userId
      }
    })
  }),

  dailyCount: protectedProcedure.query(async ({ ctx }) => {
    const { supabase, user } = ctx;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);;
    const { data, error } = await supabase.from("SitUps").select("count").eq("userId", user.id).gte("createdAt", startOfDay.toISOString()).lte("createdAt", endOfDay.toISOString());
    if(error) throw new Error(error.message);

    const total: number = data?.reduce((sum, item) => sum + item.count, 0) ?? 0;

    return total ?? 0;
  })
})
