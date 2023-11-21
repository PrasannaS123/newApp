import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTwoComponent } from './router-two.component';

describe('RouterTwoComponent', () => {
  let component: RouterTwoComponent;
  let fixture: ComponentFixture<RouterTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterTwoComponent]
    });
    fixture = TestBed.createComponent(RouterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
