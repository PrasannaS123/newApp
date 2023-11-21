import { Actions, createEffect, ofType } from "@ngrx/effects";
import { increment, init, set } from "./counter.increment";
import { decrement } from "./counter.decrement";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";



@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions, private store: Store<{ counter: number }>) { }

    loadValue = createEffect(
        () =>
            this.actions$.pipe(
                ofType(init),
                switchMap(() => {
                    const storedValue = localStorage.getItem('count')
                    if (storedValue) {
                        return of(set({ value: +storedValue }))
                    }
                    return of(set({ value: 0 }))
                }

                )
            )
    )





    saveValue = createEffect(
        () =>
            this.actions$.pipe(
                ofType(increment, decrement),
                withLatestFrom(this.store.select('counter')),
                tap(([action, counter]) => {
                    console.log(action);
                    localStorage.setItem('count', counter.toString());
                })
            ), { dispatch: false }
    )
}