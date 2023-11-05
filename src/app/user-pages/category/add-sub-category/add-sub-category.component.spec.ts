import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCategoryComponent } from './add-sub-category.component';

describe('AddSubCategoryComponent', () => {
  let component: AddSubCategoryComponent;
  let fixture: ComponentFixture<AddSubCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubCategoryComponent]
    });
    fixture = TestBed.createComponent(AddSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
