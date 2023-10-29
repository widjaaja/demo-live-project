import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCategoryComponent } from './super-category.component';

describe('SuperCategoryComponent', () => {
  let component: SuperCategoryComponent;
  let fixture: ComponentFixture<SuperCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperCategoryComponent]
    });
    fixture = TestBed.createComponent(SuperCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
