import { TestBed } from '@angular/core/testing';

import { SitecontentService } from './sitecontent.service';

describe('SitecontentService', () => {
  let service: SitecontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitecontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
