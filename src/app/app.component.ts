import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, init } from './store/counter.increment';
import { decrement } from './store/counter.decrement';

// import { DemoService } from './service-pratise/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent implements OnInit {
  title = ""; 
  name = "Surya";
  laptopName = 'laptop';

 

  OnNavigate(someOtherName: any) {
    this.laptopName = someOtherName;
  }
  navigate = false;
  OnShow() {
    this.navigate = true;
  }
  // OnIncrement() {
  //   this.counter++;
  // }
  // OnDecrement() {
  //   this.counter--;
  // }
  count$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select('counter');
  }


  increment() {
    // this.store.dispatch(increment());   normal actions

    this.store.dispatch(increment({value: 5}));
  }

  decrement() {
    // this.store.dispatch(increment());   normal actions

    this.store.dispatch(decrement({value: 5}));
  }

  ngOnInit(): void {
    this.store.dispatch(init());
  }
}
