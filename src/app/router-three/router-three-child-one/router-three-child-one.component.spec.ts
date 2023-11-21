import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterThreeChildOneComponent } from './router-three-child-one.component';

describe('RouterThreeChildOneComponent', () => {
  let component: RouterThreeChildOneComponent;
  let fixture: ComponentFixture<RouterThreeChildOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterThreeChildOneComponent]
    });
    fixture = TestBed.createComponent(RouterThreeChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
