"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { useState } from "react";
import GoalRow from "./GoalRow";
import { api } from "~/trpc/react";

type Goal = {
  enabled: boolean;
  count: number;
};

export default function DailyEditor({ setOpen }:{ setOpen: React.Dispatch<React.SetStateAction<boolean>>;}) {
  const [situps, setSitups] = useState<Goal>({ enabled: false, count: 20 });
  const [pushups, setPushups] = useState<Goal>({ enabled: false, count: 20 });
  const [pullups, setPullups] = useState<Goal>({ enabled: false, count: 10 });
  
  const setDailyGoal = api.dailyGoal.createDailyGoal.useMutation({
    onSuccess: () => {
    console.log("Daily Goal gespeichert");
    setOpen(false)
  },
    onError: (err) => {
      console.error(err.message);
    },
  }) 
  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 2,
        backgroundColor: "#1e1e1e",
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          mx: "auto",
          backgroundColor: "#2b2b2b",
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Daily Goal
          </Typography>

          <Typography sx={{ mb: 3, color: "#aaa" }}>
            Wähle deine täglichen Ziele
          </Typography>

          {/* SitUps */}
          <GoalRow
            label="SitUps"
            goal={situps}
            onToggle={(enabled) =>
              setSitups((g) => ({ ...g, enabled }))
            }
            onChangeCount={(count) =>
              setSitups((g) => ({ ...g, count }))
            }
          />

          <Divider sx={{ my: 2, borderColor: "#444" }} />

          {/* PushUps */}
          <GoalRow
            label="PushUps"
            goal={pushups}
            onToggle={(enabled) =>
              setPushups((g) => ({ ...g, enabled }))
            }
            onChangeCount={(count) =>
              setPushups((g) => ({ ...g, count }))
            }
          />

          <Divider sx={{ my: 2, borderColor: "#444" }} />

          {/* PullUps */}
          <GoalRow
            label="PullUps"
            goal={pullups}
            onToggle={(enabled) =>
              setPullups((g) => ({ ...g, enabled }))
            }
            onChangeCount={(count) =>
              setPullups((g) => ({ ...g, count }))
            }
          />

          <Button
            fullWidth
            size="large"
            variant="contained"
            sx={{ mt: 4 }}
            onClick={() => {
              setDailyGoal.mutate({
                situps: situps.enabled,
                situpsCount: situps.count,
                pushups: pushups.enabled,
                pushupsCount: pushups.count,
                pullups: pullups.enabled,
                pullupsCount: pullups.count,
              });
            }}
          >
            Daily Goal speichern
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}


