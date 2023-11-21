import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-three-child-one',
  templateUrl: './router-three-child-one.component.html',
  styleUrls: ['./router-three-child-one.component.css']
})
export class RouterThreeChildOneComponent {
  constructor(private router: Router , private route: ActivatedRoute) {
    
  }
  teamName = "";
  teamCaptainName = "";
  tname = false;
  btn = false;
  score = false;
  
  register() {
    this.tname = true;
    this.btn = true;
  }
  showDetails() {
    this.score = true;
    this.router.navigate(['/router-three' ,90,'highscore'] , {relativeTo: this.route});
  }
}
