import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SectionComponent],
  exports: [SectionComponent]
})
export class SharedModule {}
