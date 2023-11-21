import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterThreeChildComponent } from './router-three-child.component';

describe('RouterThreeChildComponent', () => {
  let component: RouterThreeChildComponent;
  let fixture: ComponentFixture<RouterThreeChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterThreeChildComponent]
    });
    fixture = TestBed.createComponent(RouterThreeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
