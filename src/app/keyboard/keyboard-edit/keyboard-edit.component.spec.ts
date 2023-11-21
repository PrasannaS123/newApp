import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardEditComponent } from './keyboard-edit.component';

describe('KeyboardEditComponent', () => {
  let component: KeyboardEditComponent;
  let fixture: ComponentFixture<KeyboardEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyboardEditComponent]
    });
    fixture = TestBed.createComponent(KeyboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
