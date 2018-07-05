import { TestBed, inject } from '@angular/core/testing';

import { SkillsService } from './skills.service';

describe('SkillTagNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsService]
    });
  });

  it('should be created', inject([SkillsService], (service: SkillsService) => {
    expect(service).toBeTruthy();
  }));
});
