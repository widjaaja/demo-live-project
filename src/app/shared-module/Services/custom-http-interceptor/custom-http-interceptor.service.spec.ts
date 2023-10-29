import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './custom-http-interceptor.service';

describe('CustomHttpInterceptorService', () => {
  let service: InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
