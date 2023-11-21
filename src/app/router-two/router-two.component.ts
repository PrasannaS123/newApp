import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-two',
  templateUrl: './router-two.component.html',
  styleUrls: ['./router-two.component.css']
})
export class RouterTwoComponent {
  constructor(public router: Router, private route: ActivatedRoute) {
    
  }
  refresh() {
    // this.router.navigate(['router-two'] , {relativeTo: this.route });
}
}
