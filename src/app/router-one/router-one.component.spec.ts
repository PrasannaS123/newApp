import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterOneComponent } from './router-one.component';

describe('RouterOneComponent', () => {
  let component: RouterOneComponent;
  let fixture: ComponentFixture<RouterOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterOneComponent]
    });
    fixture = TestBed.createComponent(RouterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
