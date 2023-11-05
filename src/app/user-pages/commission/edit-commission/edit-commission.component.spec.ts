import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommissionComponent } from './edit-commission.component';

describe('EditCommissionComponent', () => {
  let component: EditCommissionComponent;
  let fixture: ComponentFixture<EditCommissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCommissionComponent]
    });
    fixture = TestBed.createComponent(EditCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
