import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillingComponent } from './create-billing.component';

describe('CreateBillingComponent', () => {
  let component: CreateBillingComponent;
  let fixture: ComponentFixture<CreateBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBillingComponent]
    });
    fixture = TestBed.createComponent(CreateBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
