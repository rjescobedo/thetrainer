import { EXERCISES } from '../shared/exercises';
import * as ActionTypes from './ActionTypes';

export const Exercises = (state = EXERCISES, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EXERCISE:
            const exercise = action.payload;
            exercise.id = state.length;
            return state.concat(exercise);
        default:
            return state;
    }
};