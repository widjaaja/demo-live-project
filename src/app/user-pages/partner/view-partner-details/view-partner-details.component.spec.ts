import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPartnerDetailsComponent } from './view-partner-details.component';

describe('ViewPartnerDetailsComponent', () => {
  let component: ViewPartnerDetailsComponent;
  let fixture: ComponentFixture<ViewPartnerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPartnerDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewPartnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
