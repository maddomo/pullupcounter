import WorkoutTracker from "../_components/WorkoutTracker";
import { workoutConfigs } from "../_configs/workouts";

export default function PullUps(){
    return (
        <WorkoutTracker
             config={workoutConfigs.pullups}
        />
    )
}