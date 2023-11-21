import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-one',
  templateUrl: './router-one.component.html',
  styleUrls: ['./router-one.component.css']
})
export class RouterOneComponent {
  title = "RouterOne";
  constructor(public router: Router) {
    
  }
  Navigate() {
    this.router.navigate(['router-two' ]);
  }
}
