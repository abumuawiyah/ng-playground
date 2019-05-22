import { TestBed } from '@angular/core/testing';

import { RapiChatService } from './rapi-chat.service';

describe('RapiChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RapiChatService = TestBed.get(RapiChatService);
    expect(service).toBeTruthy();
  });
});
