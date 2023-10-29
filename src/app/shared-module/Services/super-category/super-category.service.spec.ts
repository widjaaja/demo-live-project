import { TestBed } from '@angular/core/testing';

import { SuperCategoryService } from './super-category.service';

describe('SuperCategoryService', () => {
  let service: SuperCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
