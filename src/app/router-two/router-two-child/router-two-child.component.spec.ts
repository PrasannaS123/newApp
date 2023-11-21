import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTwoChildComponent } from './router-two-child.component';

describe('RouterTwoChildComponent', () => {
  let component: RouterTwoChildComponent;
  let fixture: ComponentFixture<RouterTwoChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterTwoChildComponent]
    });
    fixture = TestBed.createComponent(RouterTwoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
