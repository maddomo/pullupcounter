"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme,
  Button,
  Backdrop,
  Paper,
  Fab,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { LineChart } from "@mui/x-charts/LineChart";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import type { Period, WorkoutSession } from "../_types/period";
import { StatsCard } from "./StatsCard";
import { AddCard, } from "./AddCard";
import { supabase } from "~/supabase/client";
import type { WorkoutConfig } from "../_configs/workouts";

export default function WorkoutTracker<T extends WorkoutSession>({
    config,
}: {
    config: WorkoutConfig<T>,

}) {
  const [ period, setPeriod ] = useState<Period>("weekly");
  const [ openAdd, setOpenAdd ] = useState<boolean>(false);
  const [ mounted, setMounted ] = useState(false);
  const [ workoutCount, setWorkoutCount] = useState<number>(0);
  const [ hasSession, setHasSession] = useState<boolean>(false);
  const [ offset, setOffset ] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 
  const utils = api.useUtils();
  const router = useRouter();
  const from = startOfPeriod(period, offset);
  const periodLabel = getPeriodNavigationLabel(period, from);

  const { data, error, isLoading, isFetching } = api[config.key].getAll.useQuery();
  const addMutation = api[config.key].add.useMutation();


  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();
      setHasSession(!!data.session);
      setMounted(true); // ERST nach Session-Check auf mounted setzen
    }
    void checkSession();
  }, []);

 

  function startOfPeriod(period: Period, offset = 0): Date {
    const now = new Date();
    const d = new Date(now);
  
    switch (period) {
      case "daily":
        d.setDate(d.getDate() + offset);
        d.setHours(0, 0, 0, 0);
        break;
  
      case "weekly": {
        const day = d.getDay();
        const diff = (day === 0 ? -6 : 1) - day;
        d.setDate(d.getDate() + diff + offset * 7);
        d.setHours(0, 0, 0, 0);
        break;
      }
  
      case "monthly":
        d.setMonth(d.getMonth() + offset);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        break;
  
      case "yearly":
        d.setFullYear(d.getFullYear() + offset);
        d.setMonth(0, 1);
        d.setHours(0, 0, 0, 0);
        break;
    }
  
    return d;
  }
  
  function formatLabel(date: Date, period: Period): string {
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
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function filterAndGroupPullupData(allData: WorkoutSession[], period: Period, offset: number): { label: string; value: number }[] {
    const from = startOfPeriod(period, offset);
    const to = endOfPeriod(period, offset);
  
    const filtered = allData.filter((row) => {
      const date = new Date(row.createdAt);
      return date >= from && date <= to;
    });
  
    const grouped: Record<string, number> = {};
    for (const row of filtered) {
      const date = new Date(row.createdAt);
      const key = formatLabel(date, period);
      grouped[key] = (grouped[key] ?? 0) + row.count;
    }
  
    return Object.entries(grouped).map(([label, value]) => ({ label, value }));
  }

  function getPeriodNavigationLabel(period: Period, date: Date) {
    switch (period) {
      case "daily":
        return date.toLocaleDateString("de-DE");

      case "weekly":
        const end = new Date(date);
        end.setDate(end.getDate() + 6);
        return `${date.toLocaleDateString("de-DE")} – ${end.toLocaleDateString("de-DE")}`;

      case "monthly":
        return date.toLocaleDateString("de-DE", {
          month: "long",
          year: "numeric",
        });

      case "yearly":
        return date.getFullYear().toString();
    }
  }
  
  const getPeriodLabel = (period: Period): string => {
    switch (period) {
      case "daily": return "Heute";
      case "weekly": return "Diese Woche";
      case "monthly": return "Dieser Monat";
      case "yearly": return "Dieses Jahr";
    }
  };

  const chartData = useMemo(() => {
    if (!data) return [];
    return filterAndGroupPullupData(data, period, offset);
  }, [data, period, offset, filterAndGroupPullupData]);

  const stats = useMemo(() => {
    if (!chartData.length) {
      return { total: 0, average: 0, maximum: 0 };
    }

    const total = chartData.reduce((sum, item) => sum + item.value, 0);
    const average = Math.round(total / chartData.length);
    const maximum = Math.max(...chartData.map((item) => item.value));

    return { total, average, maximum };
  }, [chartData]);

  function handlePeriodChange(_event: React.MouseEvent<HTMLElement>, newPeriod: Period | null) {
    if (newPeriod) {
      setPeriod(newPeriod);
    }
  }

  function handleCount(plus: boolean) {
    if (plus) {
      setWorkoutCount(workoutCount + 1);
    } else {
      setWorkoutCount(workoutCount - 1);
    }
  }

  function handleSubmit() {
    addMutation.mutate({ count: workoutCount }, {
      onSuccess: () => {
        setWorkoutCount(0);
        setOpenAdd(false);
        void utils[config.key].dailyCount.invalidate();
        void utils[config.key].getAll.invalidate();
      }
    });
  }

  function endOfPeriod(period: Period, offset = 0): Date {
    const start = startOfPeriod(period, offset);
    const end = new Date(start);

    switch (period) {
      case "daily":
        end.setHours(23, 59, 59, 999);
        break;

      case "weekly":
        end.setDate(end.getDate() + 6);
        end.setHours(23, 59, 59, 999);
        break;

      case "monthly":
        end.setMonth(end.getMonth() + 1);
        end.setDate(0);
        end.setHours(23, 59, 59, 999);
        break;

      case "yearly":
        end.setFullYear(end.getFullYear() + 1);
        end.setMonth(0, 0);
        end.setHours(23, 59, 59, 999);
        break;
    }

    return end;
  }

  if (!mounted) {
     return (
      <Box 
        sx={{ 
          minHeight: "100vh",
          bgcolor: "#0a0a0a",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CircularProgress sx={{ color: "#4CAF50" }} />
      </Box>
    );
  }

  // Check if user is unauthorized
  const isUnauthorized = !hasSession || error?.data?.code === 'UNAUTHORIZED';

  // Loading State
  if (isLoading) {
    return (
      <Box 
        sx={{ 
          minHeight: "100vh",
          bgcolor: "#0a0a0a",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CircularProgress sx={{ color: "#4CAF50" }} />
      </Box>
    );
  }

  // Other errors
  if (error && !isUnauthorized) {
    return (
      <Box sx={{ 
        minHeight: "100vh",
        bgcolor: "#0a0a0a",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Typography color="error">
          Fehler beim Laden der Daten: {error.message}
        </Typography>
      </Box>
    );
  }

  const labels = chartData.map((item) => item.label);
  const values = chartData.map((item) => item.value);

  return (
    <Box>
      {/* Login Overlay - nur wenn unauthorized */}
      {isUnauthorized && (
        <Backdrop
          open={true}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backdropFilter: "blur(8px)",
            bgcolor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <Paper
            elevation={24}
            sx={{
              p: 4,
              bgcolor: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: 3,
              maxWidth: 400,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "white",
              }}
            >
              🔒 Nicht angemeldet
            </Typography>
            <Typography
              sx={{
                mb: 3,
                color: "#888",
              }}
            >
              Bitte melde dich an, um deine Pull-Ups zu tracken und deine Statistiken zu sehen.
            </Typography>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => router.push("/login")}
              sx={{
                  bgcolor: "#2a2a2a",
                  color: "white",
                  minWidth: 100,
                  height: 48,
                  "&:hover": {
                    bgcolor: "#333",
                  }
              }} 
            >
              Zum Login
            </Button>
          </Paper>
        </Backdrop>
      )}

      {/* Main Content - immer sichtbar, aber gebluert wenn nicht angemeldet */}
      <Box 
        sx={{ 
          maxWidth: 1400, 
          p: 2,
          mx: "auto",
          filter: isUnauthorized ? "blur(4px)" : "none",
          pointerEvents: isUnauthorized ? "none" : "auto",
        }}
      >
        {openAdd && (
            <AddCard
              open={openAdd}
              setOpen={setOpenAdd}
              count={workoutCount}
              onIncrease={() => handleCount(true)}
              onDecrease={() => handleCount(false)}
              onSubmit={handleSubmit}
              label={config.label}
              loading={addMutation.isPending}
            />
        )}

        <Typography sx={{ fontSize: 40}}>{config.label}</Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 4, mt: 2, flexWrap: "wrap" }}>
          <StatsCard
            label={getPeriodLabel(period)}
            value={stats.total}
            gradient="green"
            loading={isFetching}
          />
          <StatsCard
            label="Durchschnitt"
            value={stats.average}
            gradient="orange"
            loading={isFetching}
          />
          <StatsCard
            label="Maximum"
            value={stats.maximum}
            gradient="blue"
            loading={isFetching}
          />
        </Box>

        <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
          <ToggleButtonGroup
            value={period}
            exclusive
            onChange={handlePeriodChange}
            aria-label="Zeitraum"
            sx={{
              bgcolor: "#1a1a1a",
              "& .MuiToggleButton-root": {
                px: 3,
                py: 1,
                color: "#888",
                border: "1px solid #2a2a2a",
                textTransform: "none",
                fontWeight: 500,
                "&.Mui-selected": {
                  bgcolor: "#2a2a2a",
                  color: "white",
                  "&:hover": {
                    bgcolor: "#333",
                  },
                },
                "&:hover": {
                  bgcolor: "#1f1f1f",
                },
              },
            }}
          >
            <ToggleButton value="daily">
              {isMobile ? "Tag" : "Täglich"}
            </ToggleButton>
            <ToggleButton value="weekly">
              {isMobile ? "Woche" : "Wöchentlich"}
            </ToggleButton>
            <ToggleButton value="monthly">
              {isMobile ? "Monat" : "Monatlich"}
            </ToggleButton>
            <ToggleButton value="yearly">
              {isMobile ? "Jahr" : "Jährlich"}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 2 }}>
          <Button 
            variant="outlined"
            sx={{ color: "white", borderColor: "#2a2a2a" }}
            onClick={() => setOffset(offset - 1)}
          >
            ←
          </Button>

          <Typography sx={{ color: "white", fontSize: 18, fontWeight: 500 }}>
            {periodLabel}
          </Typography>

          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "#2a2a2a" }}
            onClick={() => setOffset(offset + 1)}
          >
            →
          </Button>
        </Box>

        <Card
          sx={{
            bgcolor: "#1a1a1a",
            border: "1px solid #2a2a2a",
            borderRadius: 2,
            p: { xs: 1, sm: 3 },
            minHeight: 450,
            mb: 4
          }}
        >
          {chartData.length === 0 ? (
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                height: 400 
              }}
            >
              <Typography sx={{ color: "#888" }}>
                Keine Daten für diesen Zeitraum verfügbar
              </Typography>
            </Box>
          ) : (
            <LineChart
              xAxis={[
                {
                  data: labels.map((_, i) => i),
                  scaleType: "point",
                  valueFormatter: (value: unknown) => {
                    const idx = typeof value === "number" ? value : Number(value);
                    return Number.isFinite(idx) ? labels[idx] ?? "" : "";
                  },
                  tickLabelStyle: {
                    fill: "#666",
                    fontSize: isMobile ? 10 : 12,
                    
                  },
                },
              ]}
              yAxis={[
                {
                  tickLabelStyle: {
                    fill: "#666",
                    fontSize: isMobile ? 10 : 12,
                  },
                },
              ]}
              series={[
                {
                  data: values,
                  area: true,
                  color: "#4CAF50",
                  curve: "monotoneX",
                },
              ]}
              height={isMobile ? 400 : 400} 
              margin={{ 
                left: isMobile ? 0 : 50, 
                right: isMobile ? 10 : 20,
                top: 20, 
                bottom: isMobile ? 0 : 50
              }}
              sx={{
                "& .MuiLineElement-root": {
                  strokeWidth: 2,
                },
                "& .MuiAreaElement-root": {
                  fillOpacity: 0.2,
                },
                "& .MuiChartsGrid-line": {
                  stroke: "#2a2a2a",
                },
              }}
              grid={{ vertical: false, horizontal: true }}
            />
          )}
        </Card>

        
        </Box>
        <Fab 
          color="primary" 
          aria-label="add" 
          onClick={() => setOpenAdd(true)}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
    </Box>
  );
}