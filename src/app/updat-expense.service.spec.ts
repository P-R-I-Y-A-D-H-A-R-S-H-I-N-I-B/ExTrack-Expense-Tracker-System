import { TestBed } from '@angular/core/testing';

import { UpdatExpenseService } from './updat-expense.service';

describe('UpdatExpenseService', () => {
  let service: UpdatExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
