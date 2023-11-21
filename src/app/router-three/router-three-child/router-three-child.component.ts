import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-three-child',
  templateUrl: './router-three-child.component.html',
  styleUrls: ['./router-three-child.component.css']
})
export class RouterThreeChildComponent {
  items1: string[] = ['Chennai', 'Bangalore', 'Mumbai'];
  
  constructor(private router: ActivatedRoute) {
    console.log(this.router.snapshot.queryParams)
    console.log(this.router.snapshot.fragment)
  }
}
