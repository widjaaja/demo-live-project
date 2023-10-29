import { TestBed } from '@angular/core/testing';

import { PackagingCategoryService } from './packaging-category.service';

describe('PackagingCategoryService', () => {
  let service: PackagingCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagingCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
