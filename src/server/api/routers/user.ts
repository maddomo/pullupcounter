import { router, protectedProcedure } from "../trpc";

export const userRouter = router({

  getUserGoal: protectedProcedure.query(async ( { ctx } ) => {
    const { supabase, user } = ctx; 
    const { data, error } = await supabase
      .from("UserProfile")
      .select("hasDailyGoal")
      .eq("id", user.id)
      .single()

    if(error) throw new Error(error.message);
    console.log(data)
    return data;
  }),

})
