import { createStore, combineReducers } from 'redux';
import { Exercises } from './exercises';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            exercises: Exercises
        })
    );

    return store;
};