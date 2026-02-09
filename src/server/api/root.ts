import { pullupsRouter } from "~/server/api/routers/pullup";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { sitUpsRouter } from "./routers/situps";
import { pushUpsRouter } from "./routers/pushups";
import { userRouter } from "./routers/user";
import { dailyGoalRouter } from "./routers/dailyGoal";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pullups: pullupsRouter,
  situps: sitUpsRouter,
  pushUps: pushUpsRouter,
  users: userRouter,
  dailyGoal: dailyGoalRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
