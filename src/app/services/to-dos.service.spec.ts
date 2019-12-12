import { TestBed } from '@angular/core/testing';

import { ToDosService } from './to-dos.service';

describe('ToDosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDosService = TestBed.get(ToDosService);
    expect(service).toBeTruthy();
  });
});
