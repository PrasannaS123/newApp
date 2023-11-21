import { Component,Input } from '@angular/core';
import { LaptopDetail } from '../laptop-detail';
import { LaptopList } from '../laptop-list';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.css']
})
export class LaptopDetailComponent {
  laptopsDetails: LaptopDetail[] = [
    new LaptopDetail('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-m2-icon-mac-202206?wid=102&hei=102&fmt=png-alpha&.v=1664499199970', '8-Core CPC 10 - Core GPU8GB Unified Memory256GB SSD Storage¹', '16-core Neural Engine', '33.02 cm (13-inch) Retina display with True Tone', 'Two Thunderbolt / USB 4 ports', 'Magic Keyboard','From ₹20317.00/mo.Per Month with instant savings§§ and No Cost EMI§')
  ];
 
}
