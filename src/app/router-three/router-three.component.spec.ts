import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterThreeComponent } from './router-three.component';

describe('RouterThreeComponent', () => {
  let component: RouterThreeComponent;
  let fixture: ComponentFixture<RouterThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterThreeComponent]
    });
    fixture = TestBed.createComponent(RouterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
