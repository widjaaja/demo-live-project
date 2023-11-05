import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperCategoryComponent } from './add-super-category.component';

describe('AddSuperCategoryComponent', () => {
  let component: AddSuperCategoryComponent;
  let fixture: ComponentFixture<AddSuperCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSuperCategoryComponent]
    });
    fixture = TestBed.createComponent(AddSuperCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
