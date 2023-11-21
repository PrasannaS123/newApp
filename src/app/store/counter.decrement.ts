import { createAction, props } from "@ngrx/store";

export const decrement = createAction(
    '[Counter] decrement',
    props<{ value: number }>()
);