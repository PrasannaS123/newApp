import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] increment',
    // second arguments props declared the value
    props<{ value: number }>()
);


export const init = createAction(
'[Counter] init'
);

export const set = createAction(
    '[Counter] Set',
    props<{ value: number}>()
);