import { Component, Input, EventEmitter, Output } from '@angular/core';
import { LaptopList } from '../../laptop-list';

@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.css']
})
export class LaptopItemComponent {
  @Input() laptopItems: LaptopList = {
    name: '',
    description: '',
    laptopID: 0,
    imagePath: '',
   
  };

  @Output() someLaptopItems = new EventEmitter<void>();
  OnSelectItem() {
    this.someLaptopItems.emit();
  }
}


