"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Paper,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Period = "daily" | "weekly" | "monthly" | "yearly";

interface DataPoint {
  timestamp: Date;
  count: number;
}

// Dummy-Daten Generator
const generateDummyData = (period: Period): DataPoint[] => {
  const now = new Date();
  const data: DataPoint[] = [];
  
  switch (period) {
    case "daily":
      // Letzte 24 Stunden, alle 2 Stunden
      for (let i = 11; i >= 0; i--) {
        const time = new Date(now);
        time.setHours(now.getHours() - i * 2);
        data.push({
          timestamp: time,
          count: Math.floor(Math.random() * 8) + 2, // 2-10 Pull-Ups
        });
      }
      break;
      
    case "weekly":
      // Letzte 7 Tage
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        data.push({
          timestamp: date,
          count: Math.floor(Math.random() * 30) + 10, // 10-40 Pull-Ups
        });
      }
      break;
      
    case "monthly":
      // Letzte 30 Tage, alle 3 Tage
      for (let i = 10; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i * 3);
        data.push({
          timestamp: date,
          count: Math.floor(Math.random() * 50) + 20, // 20-70 Pull-Ups
        });
      }
      break;
      
    case "yearly":
      // Letzte 12 Monate
      for (let i = 11; i >= 0; i--) {
        const date = new Date(now);
        date.setMonth(now.getMonth() - i);
        data.push({
          timestamp: date,
          count: Math.floor(Math.random() * 400) + 200, // 200-600 Pull-Ups
        });
      }
      break;
  }
  
  return data;
};

// Formatierung des Datums je nach Zeitraum
const formatTimestamp = (date: Date, period: Period): string => {
  switch (period) {
    case "daily":
      return date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    case "weekly":
      return date.toLocaleDateString("de-DE", { weekday: "short" });
    case "monthly":
      return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
    case "yearly":
      return date.toLocaleDateString("de-DE", { month: "short" });
  }
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
  const [period, setPeriod] = useState<Period>("daily");
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

  // Dummy-Daten laden - nur auf Client
  const entries = mounted ? generateDummyData(period) : [];
  const total = entries.reduce((sum, entry) => sum + entry.count, 0);

  // Daten für das Chart vorbereiten
  const chartData = entries.map((entry) => ({
    timestamp: formatTimestamp(entry.timestamp, period),
    count: entry.count,
  }));

  // Loading State während Server-Side Rendering
  if (!mounted) {
    return (
      <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 300 }}>
          Pull-Up Tracker
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 400 }}>
          <Typography color="text.secondary">Lädt...</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 300,
          color: "text.primary",
        }}
      >
        Pull-Up Tracker
      </Typography>

      {/* Period Selector */}
      <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
        <ToggleButtonGroup
          value={period}
          exclusive
          onChange={handlePeriodChange}
          aria-label="Zeitraum"
          size="small"
          sx={{
            "& .MuiToggleButton-root": {
              px: 3,
              py: 1,
              textTransform: "none",
              fontWeight: 400,
            },
          }}
        >
          <ToggleButton value="daily">Täglich</ToggleButton>
          <ToggleButton value="weekly">Wöchentlich</ToggleButton>
          <ToggleButton value="monthly">Monatlich</ToggleButton>
          <ToggleButton value="yearly">Jährlich</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Total Count Card */}
      <Card
        elevation={0}
        sx={{
          mb: 3,
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1, fontWeight: 400 }}
          >
            {getPeriodLabel(period)}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 300,
              color: "primary.main",
            }}
          >
            {total}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Pull-Ups
          </Typography>
        </CardContent>
      </Card>

      {/* Chart */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          border: "1px solid",
          borderColor: "divider",
          minHeight: 400,
        }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="timestamp"
              tick={{ fontSize: 12 }}
              stroke="#999"
            />
            <YAxis tick={{ fontSize: 12 }} stroke="#999" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: 4,
              }}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#1976d2"
              strokeWidth={2}
              dot={{ fill: "#1976d2", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}