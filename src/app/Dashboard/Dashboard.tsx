"use client"

import { Box } from "@mui/material"
import DashboardCard from "./components/DashboardCard"
import { api } from "~/trpc/react";

export default function DashboardComponent(){

  const { data: pullups = 0, isLoading: isLoadingPullups } = api.pullups.dailyCount.useQuery();
  const { data: pushups = 0, isLoading: isLoadingPushUps } = api.pushUps.dailyCount.useQuery();
  const { data: situps = 0, isLoading: isLoadingSitUps } = api.situps.dailyCount.useQuery();
  
  return (
    <Box 
      sx={{
        mt: 2
      }}
    >
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