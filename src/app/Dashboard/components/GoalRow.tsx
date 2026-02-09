import { Box, FormControlLabel, Switch, TextField, Typography } from "@mui/material";

export default function GoalRow({
  label,
  goal,
  onToggle,
  onChangeCount,
}: {
  label: string;
  goal: { enabled: boolean; count: number };
  onToggle: (enabled: boolean) => void;
  onChangeCount: (count: number) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={goal.enabled}
            onChange={(e) => onToggle(e.target.checked)}
          />
        }
        label={
          <Typography fontWeight="bold">
            {label}
          </Typography>
        }
      />

      <TextField
        type="number"
        size="small"
        disabled={!goal.enabled}
        value={goal.count}
        onChange={(e) => onChangeCount(Number(e.target.value))}
        inputProps={{ min: 1 }}
        sx={{
          width: 120,
          ml: "auto",
          input: { color: "white" },
        }}
      />
    </Box>
  );
}
