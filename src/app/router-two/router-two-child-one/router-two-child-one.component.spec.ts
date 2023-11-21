import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTwoChildOneComponent } from './router-two-child-one.component';

describe('RouterTwoChildOneComponent', () => {
  let component: RouterTwoChildOneComponent;
  let fixture: ComponentFixture<RouterTwoChildOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterTwoChildOneComponent]
    });
    fixture = TestBed.createComponent(RouterTwoChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
