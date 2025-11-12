/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  CircularProgress,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { api } from "../trpc/react"; // Passe den Import-Pfad an deine Struktur an

type Period = "daily" | "weekly" | "monthly" | "yearly";

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

  // tRPC Query - wird automatisch neu geladen wenn sich 'period' ändert
  const { data: queryData, isLoading, error } = api.pullups.getByPeriod.useQuery(
    { period },
    { enabled: mounted } // Query nur ausführen wenn Component mounted ist
  );

  const handlePeriodChange = (
    _event: React.MouseEvent<HTMLElement>,
    newPeriod: Period | null
  ) => {
    if (newPeriod) {
      setPeriod(newPeriod);
    }
  };

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

  // Daten aus der Query verarbeiten
      const labels: string[] = queryData?.map((d: { label: unknown; }) =>
        d.label == null ? "" : String(d.label)
      ) ?? [];
      const data: number[] = queryData?.map((d: { value: unknown; }) => Number(d.value)) ?? [];
      const total = data.reduce((sum: number, val: number) => sum + val, 0);
      const average = data.length > 0 ? Math.round(total / data.length) : 0;
      const maximum = data.length > 0 ? Math.max(...data) : 0;

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
                {average}
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
                {maximum}
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
          {data.length === 0 ? (
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
          )}
        </Card>
      </Box>
    </Box>
  );
}