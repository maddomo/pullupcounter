import { Card, CardActionArea, CardActions, CardContent, CircularProgress, Typography } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useRouter } from "next/navigation";

export default function DashboardCard({title, count, route, loading} : { title: string, count: number, route: string, loading: boolean}){
    const router = useRouter();
    return(
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
            <CardActionArea sx={{ display: "flex", alignItems: "center" }} onClick={() => router.push(route)}>
                <CardContent>
                    <Typography sx={{ fontSize: 28, fontWeight: "bold" }}>{title}</Typography>
                    <Typography>
                        Daily Count:{" "}
                        {loading ? (
                            <CircularProgress size={14} sx={{ ml: 1,color: "#4CAF50" }} />
                        ) : (
                            count
                        )}
                    </Typography>
                </CardContent>
                <CardActions sx={{ ml: "auto"}}>
                    <ArrowCircleRightIcon color="primary" sx={{ fontSize: 50}}/>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}