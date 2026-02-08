import WorkoutTracker from "../_components/WorkoutTracker";
import { workoutConfigs } from "../_configs/workouts";

export default function SitUps(){
    return (
        <WorkoutTracker
            config={workoutConfigs.situps}
        />
    )
}