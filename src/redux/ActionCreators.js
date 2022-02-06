import * as ActionTypes from './ActionTypes';

export const addExercise = (exerciseId, exerciseName, type, sets, reps, description, video) => ({
    type: ActionTypes.ADD_EXERCISE,
    payload: {
        exerciseId,
        exerciseName: exerciseName,
        type: type,
        sets: sets,
        reps: reps,
        description: description,
        video: video
    }
});