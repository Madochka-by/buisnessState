import { TestBed } from '@angular/core/testing';

import { ChangeThemService } from './change-them.service';

describe('ChangeThemService', () => {
  let service: ChangeThemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeThemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
