import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePratiseComponent } from './service-pratise.component';

describe('ServicePratiseComponent', () => {
  let component: ServicePratiseComponent;
  let fixture: ComponentFixture<ServicePratiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicePratiseComponent]
    });
    fixture = TestBed.createComponent(ServicePratiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
