import { Component } from '@angular/core';
import { LaptopList } from './laptop-list';
import { LaptopService } from './laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
  
})
export class LaptopComponent {
  showDetails = false;
  OnClick() {
    this.showDetails = true;
  }
}
