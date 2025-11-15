/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  CircularProgress,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { api } from "../trpc/react"; // Passe den Import-Pfad an deine Struktur an
import type { Period, PullupSession } from "./_types/period";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { StatsCard } from "./_components/StatsCard";
import { AddPullUpsCard } from "./_components/AddPullUpsCard";


// Utility Functions
function startOfPeriod(period: Period): Date {
  const now = new Date();
  const d = new Date(now);

  switch (period) {
    case "daily":
      d.setHours(0, 0, 0, 0);
      break;
    case "weekly": {
      const day = d.getDay(); //Zeit wird auf 0:0:0:0 gesetzt
      const diff = (day === 0 ? -6 : 1) - day; //berechnet abstand zwischen Tag und Montag
      d.setDate(d.getDate() + diff); //Datum wird auf Montag der Woche gesetzt
      d.setHours(0, 0, 0, 0);
      break;
    }
    case "monthly":
      d.setDate(1); //setzt Datum auf den ersten des Monats
      d.setHours(0, 0, 0, 0);
      break;
    case "yearly":
      d.setMonth(0, 1); //setze Datum auf 0=Januar, 1=1.Tag
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

function filterAndGroupPullupData(allData: PullupSession[],period: Period): { label: string; value: number }[] {
  const from = startOfPeriod(period);
  const now = new Date();

  // Filtern nach Periode
  const filtered = allData.filter((row) => {
    const date = new Date(row.createdAt);
    return date >= from && date <= now;
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



const getPeriodLabel = (period: Period): string => {
  switch (period) {
    case "daily": return "Heute";
    case "weekly": return "Diese Woche";
    case "monthly": return "Dieser Monat";
    case "yearly": return "Dieses Jahr";
  }
};

export default function PullUpTracker() {
  const [period, setPeriod] = useState<Period>("weekly");
  const [mounted, setMounted] = useState(false);
  const [ pullUpCount, setPullUpCount ] = useState<number>(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 
  const utils = api.useUtils();


  useEffect(() => {
    setMounted(true);
  }, []);

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
    return filterAndGroupPullupData(allPullups, period);
  }, [allPullups, period]);

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