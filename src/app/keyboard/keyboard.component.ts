import { Component } from '@angular/core';
import { Keyboard } from './keyboard';
import { KeyboardService } from './keyboard.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
  providers: [KeyboardService]
})
export class KeyboardComponent {
  keyboards: Keyboard[];
  constructor(private keyservice: KeyboardService) {
    this.keyboards = this.keyservice.getKeyboard();
    
    this.keyservice.keyboardShow.subscribe(
      (dummy: Keyboard[]) => { 
        this.keyboards = dummy;
      }
    );
    
  }
  
//   OnKeyboard(keyboard: Keyboard) {
//     this.keyboards.push(keyboard);
// }

}
