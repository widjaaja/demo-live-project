import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommissionComponent } from './create-commission.component';

describe('CreateCommissionComponent', () => {
  let component: CreateCommissionComponent;
  let fixture: ComponentFixture<CreateCommissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCommissionComponent]
    });
    fixture = TestBed.createComponent(CreateCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
