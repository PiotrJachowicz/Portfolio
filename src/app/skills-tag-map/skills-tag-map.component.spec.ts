import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTagMapComponent } from './skills-tag-map.component';

describe('SkillsTagMapComponent', () => {
  let component: SkillsTagMapComponent;
  let fixture: ComponentFixture<SkillsTagMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsTagMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTagMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
