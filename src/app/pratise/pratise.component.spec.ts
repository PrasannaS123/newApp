import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratiseComponent } from './pratise.component';

describe('PratiseComponent', () => {
  let component: PratiseComponent;
  let fixture: ComponentFixture<PratiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PratiseComponent]
    });
    fixture = TestBed.createComponent(PratiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
