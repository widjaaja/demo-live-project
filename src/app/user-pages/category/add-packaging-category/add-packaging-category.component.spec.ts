import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackagingCategoryComponent } from './add-packaging-category.component';

describe('AddPackagingCategoryComponent', () => {
  let component: AddPackagingCategoryComponent;
  let fixture: ComponentFixture<AddPackagingCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPackagingCategoryComponent]
    });
    fixture = TestBed.createComponent(AddPackagingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
