"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

type Period = "daily" | "weekly" | "monthly" | "yearly";

interface DataPoint {
  timestamp: Date;
  count: number;
}

// Statische Dummy-Daten (keine Math.random für SSR-Kompatibilität)
const staticDummyData = {
  daily: [
    { hour: 0, count: 5 },
    { hour: 2, count: 8 },
    { hour: 4, count: 3 },
    { hour: 6, count: 7 },
    { hour: 8, count: 12 },
    { hour: 10, count: 15 },
    { hour: 12, count: 10 },
    { hour: 14, count: 18 },
    { hour: 16, count: 14 },
    { hour: 18, count: 20 },
    { hour: 20, count: 16 },
    { hour: 22, count: 9 },
  ],
  weekly: [
    { day: "Mo", count: 45 },
    { day: "Di", count: 38 },
    { day: "Mi", count: 52 },
    { day: "Do", count: 41 },
    { day: "Fr", count: 48 },
    { day: "Sa", count: 35 },
    { day: "So", count: 29 },
  ],
  monthly: [
    { date: "01.11", count: 45 },
    { date: "04.11", count: 52 },
    { date: "07.11", count: 38 },
    { date: "10.11", count: 61 },
    { date: "13.11", count: 48 },
    { date: "16.11", count: 55 },
    { date: "19.11", count: 43 },
    { date: "22.11", count: 58 },
    { date: "25.11", count: 47 },
    { date: "28.11", count: 52 },
  ],
  yearly: [
    { month: "Jan", count: 450 },
    { month: "Feb", count: 520 },
    { month: "Mär", count: 480 },
    { month: "Apr", count: 610 },
    { month: "Mai", count: 580 },
    { month: "Jun", count: 550 },
    { month: "Jul", count: 630 },
    { month: "Aug", count: 590 },
    { month: "Sep", count: 540 },
    { month: "Okt", count: 600 },
    { month: "Nov", count: 520 },
  ],
};

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

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePeriodChange = (
    _event: React.MouseEvent<HTMLElement>,
    newPeriod: Period | null
  ) => {
    if (newPeriod) {
      setPeriod(newPeriod);
    }
  };

  // Daten basierend auf Zeitraum
  const getData = () => {
    switch (period) {
      case "daily":
        return {
          labels: staticDummyData.daily.map(d => `${d.hour}:00`),
          data: staticDummyData.daily.map(d => d.count),
        };
      case "weekly":
        return {
          labels: staticDummyData.weekly.map(d => d.day),
          data: staticDummyData.weekly.map(d => d.count),
        };
      case "monthly":
        return {
          labels: staticDummyData.monthly.map(d => d.date),
          data: staticDummyData.monthly.map(d => d.count),
        };
      case "yearly":
        return {
          labels: staticDummyData.yearly.map(d => d.month),
          data: staticDummyData.yearly.map(d => d.count),
        };
    }
  };

  const { labels, data } = getData();
  const total = data.reduce((sum, val) => sum + val, 0);

  if (!mounted) {
    return null;
  }

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

        {/* Stats Cards */}
        <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: 2,
              p: 2.5,
              flex: "1 1 200px",
              minWidth: 200,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#888", mb: 1, display: "block" }}
            >
              {getPeriodLabel(period)}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 600, color: "white" }}
              >
                {total}
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 30,
                  background: "linear-gradient(90deg, #4CAF50 0%, #81C784 100%)",
                  borderRadius: 1,
                  opacity: 0.3,
                }}
              />
            </Box>
          </Card>

          <Card
            sx={{
              bgcolor: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: 2,
              p: 2.5,
              flex: "1 1 200px",
              minWidth: 200,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#888", mb: 1, display: "block" }}
            >
              Durchschnitt
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 600, color: "white" }}
              >
                {Math.round(total / data.length)}
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 30,
                  background: "linear-gradient(90deg, #2196F3 0%, #64B5F6 100%)",
                  borderRadius: 1,
                  opacity: 0.3,
                }}
              />
            </Box>
          </Card>

          <Card
            sx={{
              bgcolor: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: 2,
              p: 2.5,
              flex: "1 1 200px",
              minWidth: 200,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#888", mb: 1, display: "block" }}
            >
              Maximum
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 600, color: "white" }}
              >
                {Math.max(...data)}
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 30,
                  background: "linear-gradient(90deg, #FF9800 0%, #FFB74D 100%)",
                  borderRadius: 1,
                  opacity: 0.3,
                }}
              />
            </Box>
          </Card>
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
          }}
        >
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
                data: data,
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
        </Card>
      </Box>
    </Box>
  );
}