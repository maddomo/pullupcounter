import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { supabase } from '../../../supabase/client'

function startOfPeriod(period: "daily" | "weekly" | "monthly" | "yearly") {
  const now = new Date();
  const d = new Date(now);

  switch (period) {
    case "daily":
      d.setHours(0, 0, 0, 0);
      break;
    case "weekly": {
      const day = d.getDay();
      const diff = (day === 0 ? -6 : 1) - day;
      d.setDate(d.getDate() + diff);
      d.setHours(0, 0, 0, 0);
      break;
    }
    case "monthly":
      d.setDate(1);
      d.setHours(0, 0, 0, 0);
      break;
    case "yearly":
      d.setMonth(0, 1);
      d.setHours(0, 0, 0, 0);
      break;
  }

  return d.toISOString();
}

function formatLabel(date: Date, period: "daily" | "weekly" | "monthly" | "yearly") {
  switch (period) {
    case "daily":
      return date.getHours().toString().padStart(2, "0") + ":00";
    case "weekly":
      return date.toLocaleDateString("de-DE", { weekday: "short" }); 
    case "monthly":
      return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
    case "yearly":
      return date.toLocaleDateString("de-DE", { month: "short" });
  }
}

export const pullupsRouter = router({
  getByPeriod: publicProcedure
    .input(z.object({ period: z.enum(["daily", "weekly", "monthly", "yearly"]) }))
    .query(async ({ input }) => {
      const now = new Date();
      const from = startOfPeriod(input.period);

      const { data, error } = await supabase
        .from("PullupSession")
        .select("count, createdAt")
        .gte("createdAt", from)
        .lte("createdAt", now.toISOString())
        .order("createdAt", { ascending: true });

      if (error) throw new Error(error.message);
      if (!data) return [];

      // Gruppieren
      const grouped: Record<string, number> = {};
      for (const row of data) {
        const date = new Date(String(row.createdAt));
        const key = formatLabel(date, input.period);
        grouped[key] = (grouped[key] ?? 0) + row.count;
      }

      return Object.entries(grouped).map(([label, value]) => ({ label, value }));
    }),
});
