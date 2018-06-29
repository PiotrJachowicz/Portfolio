import { TestBed, inject } from '@angular/core/testing';

import { SkillTagNotificationService } from './skill-tag-notification.service';

describe('SkillTagNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillTagNotificationService]
    });
  });

  it('should be created', inject([SkillTagNotificationService], (service: SkillTagNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
