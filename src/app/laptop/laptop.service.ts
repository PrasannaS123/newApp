import { Injectable } from '@angular/core';
import { LaptopList } from './laptop-list';
import { Keyboard } from '../keyboard/keyboard';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  laptops: LaptopList[] = [
    new LaptopList('Apple',
      'Apple is undoubtedly the most luxurious and top-rated laptop brand across the world.',
      456891238669, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664497359481')
  ];

  laptoplists() {
    return this.laptops.slice();
  }
  constructor() { }
}
