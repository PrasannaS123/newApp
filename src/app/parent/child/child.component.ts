import { Component,Input,Output, OnInit,EventEmitter,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  constructor() {
    console.log('Constructoe called');
  }
  @Input('justElement') element: {
    laptopDetails: string;
    laptopContent: string;
    laptopList1: string;
    laptopList2: string;
    laptopList3: string;
    laptopList4: string;
    laptopFeatures: string;
  } = {
      laptopDetails: '',
      laptopContent: '',
      laptopList1: '',
      laptopList2: '',
      laptopList3: '',
      laptopList4: '',
      laptopFeatures: '',
    }


  @Output('textShowing') buttonClicked = new EventEmitter<void>();
  buttonClick() {
    this.buttonClicked.emit();
  }
  

  
}
