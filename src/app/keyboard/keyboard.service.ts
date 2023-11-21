import { EventEmitter, Injectable } from '@angular/core';
import { Keyboard } from './keyboard';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  keyboardShow = new EventEmitter<Keyboard[]>();
  keyboards: Keyboard[] = [
    new Keyboard('Gaming Keybaord', '56982')
  ];

  getKeyboard() {
    return this.keyboards.slice();
  }

  OnKeyboard(keyboard: Keyboard) {
    this.keyboards.push(keyboard);
    this.keyboardShow.emit(this.keyboards.slice());
  }
  constructor() { }
}
