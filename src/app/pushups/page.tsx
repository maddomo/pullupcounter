import WorkoutTracker from "../_components/WorkoutTracker";
import { workoutConfigs } from "../_configs/workouts";

export default function PushUps(){
    return (
        <WorkoutTracker
            config={workoutConfigs.pushups}
        >

        </WorkoutTracker>
    )
}