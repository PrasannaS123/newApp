import { Component, EventEmitter, Output } from '@angular/core';
import { LaptopList } from '../laptop-list';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css'],
  providers: [LaptopService]
})
export class LaptopListComponent {
  // laptops: LaptopList[] = [
  //   new LaptopList('Apple', 'Apple is undoubtedly the most luxurious and top-rated laptop brand across the world.', 456891238669, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664497359481')
  // ];
  laptops: LaptopList[];
  constructor(private laptop: LaptopService) {
    this.laptops = this.laptop.laptoplists();
  }
@Output() selectSomeLaptops = new EventEmitter<LaptopList>();
  onLaptopSelectedItems(dummy: LaptopList) {
    this.selectSomeLaptops.emit(dummy);
  }
}
