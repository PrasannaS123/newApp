import { createReducer, on } from "@ngrx/store";
import { increment, set } from "./counter.increment";
import { state } from "@angular/animations";
import { decrement } from "./counter.decrement";


const initialValue = 0;

export const counterReducer = createReducer(
    initialValue,
    // on(increment, (state) => state + 1)   ---  normal declaration
    on(increment, (state, action) => state + action.value),

    on(decrement, (state, action) => state - action.value),
    on(set, (state, action) => action.value)

);