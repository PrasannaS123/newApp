import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterNotFoundComponent } from './router-not-found.component';

describe('RouterNotFoundComponent', () => {
  let component: RouterNotFoundComponent;
  let fixture: ComponentFixture<RouterNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterNotFoundComponent]
    });
    fixture = TestBed.createComponent(RouterNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
