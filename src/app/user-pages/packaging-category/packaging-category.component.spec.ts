import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingCategoryComponent } from './packaging-category.component';

describe('PackagingCategoryComponent', () => {
  let component: PackagingCategoryComponent;
  let fixture: ComponentFixture<PackagingCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagingCategoryComponent]
    });
    fixture = TestBed.createComponent(PackagingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
