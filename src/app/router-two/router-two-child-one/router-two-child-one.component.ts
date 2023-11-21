import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-two-child-one',
  templateUrl: './router-two-child-one.component.html',
  styleUrls: ['./router-two-child-one.component.css']
})
export class RouterTwoChildOneComponent {
  user: { id: number , name: string };

  constructor(private roite: ActivatedRoute) {
    this.user = {
      id: this.roite.snapshot.params['id'],
      name: this.roite.snapshot.params['name'],
    };
    this.roite.params
      .subscribe(params => {
        this.user.id = params['id'];
        this.user.name = params['name'];
        
       })
  }
}
