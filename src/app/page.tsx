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
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { api } from "../trpc/react"; // Passe den Import-Pfad an deine Struktur an
import type { Period, PullupSession } from "./_types/period";
import { StatsCard } from "./_components/StatsCard";
import { AddPullUpsCard } from "./_components/AddPullUpsCard";


// Utility Functions

export default function PullUpTracker() {
  const [period, setPeriod] = useState<Period>("weekly");
  const [mounted, setMounted] = useState(false);
  const [ pullUpCount, setPullUpCount ] = useState<number>(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 
  const utils = api.useUtils();
  const [offset, setOffset] = useState(0);
  const from = startOfPeriod(period, offset);
  const periodLabel = getPeriodNavigationLabel(period, from);

  useEffect(() => {
    setMounted(true);
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
    
  function filterAndGroupPullupData(allData: PullupSession[], period: Period, offset: number): { label: string; value: number }[] {
      const from = startOfPeriod(period, offset);
      const to = endOfPeriod(period, offset);
    
      // Filtern nach Periode
      const filtered = allData.filter((row) => {
        const date = new Date(row.createdAt);
        return date >= from && date <= to;
      });
    
      // Gruppieren
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

  // tRPC Query - wird automatisch neu geladen wenn sich 'period' ändert
  const { data: allPullups, isLoading, error } = api.pullups.getAll.useQuery();
  const addPullUps = api.pullups.addPullUps.useMutation({
    onSuccess: () => {
      void utils.pullups.getAll.invalidate();   // <-- Daten neu laden!
    }
  });

  // Berechne gefilterte und gruppierte Daten basierend auf der Periode
  const chartData = useMemo(() => {
    if (!allPullups) return [];
    return filterAndGroupPullupData(allPullups, period, offset);
  }, [allPullups, period, offset]);

  // Berechne Statistiken
  const stats = useMemo(() => {
    if (!chartData.length) {
      return { total: 0, average: 0, maximum: 0 };
    }

    const total = chartData.reduce((sum, item) => sum + item.value, 0);
    const average = Math.round(total / chartData.length);
    const maximum = Math.max(...chartData.map((item) => item.value));

    return { total, average, maximum };
  }, [chartData]);

  function handlePeriodChange(_event: React.MouseEvent<HTMLElement>,newPeriod: Period | null) {
    if (newPeriod) {
      setPeriod(newPeriod);
    }
  }

  function handlePullUpCount(plus: boolean){
    if(plus){
      setPullUpCount(pullUpCount + 1);
    }else {
      setPullUpCount(pullUpCount -1 )
    }
  }

  function handlePullUpSubmit(){
    addPullUps.mutate({count: pullUpCount},{
      onSuccess: () => {
        setPullUpCount(0)
      }
    })
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
      end.setDate(0); // letzter Tag des Monats
      end.setHours(23, 59, 59, 999);
      break;

    case "yearly":
      end.setFullYear(end.getFullYear() + 1);
      end.setMonth(0, 0); // 31.12.
      end.setHours(23, 59, 59, 999);
      break;
  }

  return end;
}

  

  if (!mounted) {
    return null;
  }

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

  // Error State
  if (error) {
    return (
      <Box 
        sx={{ 
          minHeight: "100vh",
          bgcolor: "#0a0a0a",
          color: "white",
          p: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Typography color="error">
          Fehler beim Laden der Daten: {error.message}
        </Typography>
      </Box>
    );
  }

  const labels = chartData.map((item) => item.label);
  const values = chartData.map((item) => item.value);

  return (
    <Box 
      sx={{ 
        minHeight: "100vh",
        bgcolor: "#0a0a0a",
        color: "white",
        p: 4
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        {/* Header */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: "white",
          }}
        >
          Pull-Up Tracker
        </Typography>

        
        {isMobile && (
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb:3 }}>
            <AddPullUpsCard
              count={pullUpCount}
              onIncrease={() => handlePullUpCount(true)}
              onDecrease={() => handlePullUpCount(false)}
              onSubmit={() => handlePullUpSubmit()}
            />
            
          </Box>
        )}
        {/* Stats Cards */}
        <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
          <StatsCard
            label={getPeriodLabel(period)}
            value={stats.total}
            gradient="green"
          />
          <StatsCard
            label="Durchschnitt"
            value={stats.average}
            gradient="orange"
          />
          <StatsCard
            label="Maximum"
            value={stats.maximum}
            gradient="blue"
          />
        </Box>

        {/* Period Selector */}
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
            <ToggleButton value="daily">Täglich</ToggleButton>
            <ToggleButton value="weekly">Wöchentlich</ToggleButton>
            <ToggleButton value="monthly">Monatlich</ToggleButton>
            <ToggleButton value="yearly">Jährlich</ToggleButton>
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

        {/* Chart */}
        <Card
          sx={{
            bgcolor: "#1a1a1a",
            border: "1px solid #2a2a2a",
            borderRadius: 2,
            p: 3,
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
              <Typography sx={{ color: "#666" }}>
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
                    fontSize: 12,
                  },
                },
              ]}
              yAxis={[
                {
                  tickLabelStyle: {
                    fill: "#666",
                    fontSize: 12,
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
              height={400}
              margin={{ left: 50, right: 20, top: 20, bottom: 50 }}
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
        {/* Hinzufügen */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb:3 }}>
            <AddPullUpsCard
              count={pullUpCount}
              onIncrease={() => handlePullUpCount(true)}
              onDecrease={() => handlePullUpCount(false)}
              onSubmit={() => handlePullUpSubmit()}
            />
            
          </Box>
        )}
      </Box>
    </Box>
  );
}