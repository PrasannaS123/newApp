import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-service-pratise',
  templateUrl: './service-pratise.component.html',
  styleUrls: ['./service-pratise.component.css'],
  providers: [DemoService]
})
export class ServicePratiseComponent {
  constructor(private demo: DemoService) {}
  showName() {
    const name = "Prasanna";
    this.demo.Name(name)
  }
  
  




}
