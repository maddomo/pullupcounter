"use client";

import { Card, Typography, Box, CircularProgress } from "@mui/material";

export function StatsCard({
  label,
  value,
  gradient,
  loading
}: {
  label: string;
  value: number;
  gradient: "green" | "blue" | "orange";
  loading: boolean;
}) {
  const gradients = {
    green: "linear-gradient(90deg, #4CAF50 0%, #81C784 100%)",
    blue: "linear-gradient(90deg, #2196F3 0%, #64B5F6 100%)",
    orange: "linear-gradient(90deg, #FF9800 0%, #FFB74D 100%)",
  };

  return (
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
        {label}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {loading ? (
          <CircularProgress size={30} sx={{ color: "#4CAF50" }} />
        ) : (
          <Typography variant="h3" sx={{ fontWeight: 600, color: "white" }}>
            {value}
          </Typography>
        )}

        <Box
          sx={{
            width: 80,
            height: 30,
            background: gradients[gradient],
            borderRadius: 1,
            opacity: 0.3,
          }}
        />
      </Box>
    </Card>
  );
}
