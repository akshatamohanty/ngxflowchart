import { TestBed } from '@angular/core/testing';

import { FlowService } from './flow.service';

describe('FlowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowService = TestBed.get(FlowService);
    expect(service).toBeTruthy();
  });
});
