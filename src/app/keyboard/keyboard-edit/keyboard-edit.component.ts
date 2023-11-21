import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Keyboard } from '../keyboard';
import { KeyboardService } from '../keyboard.service';
@Component({
  selector: 'app-keyboard-edit',
  templateUrl: './keyboard-edit.component.html',
  styleUrls: ['./keyboard-edit.component.css']
})
export class KeyboardEditComponent {
  @ViewChild('name') nameRef!: ElementRef;
  @ViewChild('amount') amountRef!: ElementRef;
  // @Output() keyboardAdded = new EventEmitter<Keyboard>();

  constructor(private keyservice: KeyboardService) {}
  AddKeyboard() {
    const AddKeyboardName = this.nameRef.nativeElement.value;
    const AddKeyboardAmount = this.amountRef.nativeElement.value;
    const NewKeyboard = new Keyboard(AddKeyboardName, AddKeyboardAmount);
    this.keyservice.OnKeyboard(NewKeyboard);
    // this.keyboardAdded.emit(NewKeyboard);
  }
}
