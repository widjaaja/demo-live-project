import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBypassComponent } from './account-bypass.component';

describe('AccountBypassComponent', () => {
  let component: AccountBypassComponent;
  let fixture: ComponentFixture<AccountBypassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountBypassComponent]
    });
    fixture = TestBed.createComponent(AccountBypassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
