import { Component } from '@angular/core';

@Component({
  selector: 'app-pratise',
  templateUrl: './pratise.component.html',
  styleUrls: ['./pratise.component.css']
})
export class PratiseComponent {
  // numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  oddNum = [1, 3, 5, 7, 9];
  evenNum = [2, 4, 6, 8];
  number = false;
  value = 10;
}
