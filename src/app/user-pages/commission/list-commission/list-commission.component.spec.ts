import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommissionComponent } from './list-commission.component';

describe('ListCommissionComponent', () => {
  let component: ListCommissionComponent;
  let fixture: ComponentFixture<ListCommissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCommissionComponent]
    });
    fixture = TestBed.createComponent(ListCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
