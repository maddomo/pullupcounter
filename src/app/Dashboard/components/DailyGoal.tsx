"use client"
import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { api } from "~/trpc/react";

export default function DailyGoal({ setOpen }:{ setOpen: React.Dispatch<React.SetStateAction<boolean>>;}){

    const { data } = api.users.getUserGoal.useQuery();
    return (
        <Box>
            {!data?.hasDailyGoal ? (
                <Card
                    sx={{
                        mx: 2,
                        height: "100px",
                        backgroundColor: "#383232",
                        color: "white",
                        display: "flex",
                        mt: 2

                    }}
                >
                    <CardActionArea sx={{ display: "flex", alignItems: "center" }} onClick={() => setOpen(true)}>
                        <CardContent>
                            <Typography sx={{ fontSize: 28, fontWeight: "bold" }}>Create your own daily goal</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            ): (
                <p></p>
            )}
        </Box>
    )
}