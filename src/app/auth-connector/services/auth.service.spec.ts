import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {AuthServiceFakeService} from './auth-service-fake.service';
import {commonTestingProviders} from '../../common/commonTesting';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: commonTestingProviders
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
