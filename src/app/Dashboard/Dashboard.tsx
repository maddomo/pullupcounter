"use client"

import { Box } from "@mui/material"
import DashboardCard from "./components/DashboardCard"
import { api } from "~/trpc/react";
import DailyGoal from "./components/DailyGoal";
import { useState } from "react";
import DailyEditor from "./components/DailyEditor";

export default function DashboardComponent(){
  const [ openDailyGoal, setOpenDailyGoal ] = useState<boolean>(false)
  const { data: pullups = 0, isLoading: isLoadingPullups } = api.pullups.dailyCount.useQuery();
  const { data: pushups = 0, isLoading: isLoadingPushUps } = api.pushUps.dailyCount.useQuery();
  const { data: situps = 0, isLoading: isLoadingSitUps } = api.situps.dailyCount.useQuery();
  
  return (
    <Box 
      sx={{
        mt: 2
      }}
    >

      {openDailyGoal && (
        <DailyEditor 
          setOpen={setOpenDailyGoal}
        />
      )}

      <DailyGoal 
        setOpen={setOpenDailyGoal}
      />

      <DashboardCard 
        title="PullUps"
        count={pullups}
        route="pullups"
        loading={isLoadingPullups}
      />

      <DashboardCard 
        title="PushUps"
        count={pushups}
        route="pushups"
        loading={isLoadingPushUps}
      />

      <DashboardCard 
        title="SitUps"
        count={situps}
        route="situps"
        loading={isLoadingSitUps}
      />


    </Box>
  )
}