import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {
  

  @Output() someNameCalledLaptop = new EventEmitter<string>();
  OnSelect(someName: string) {
    this.someNameCalledLaptop.emit(someName);
}



}
