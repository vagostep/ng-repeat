import { NgModule } from '@angular/core';
import { NgRepeatDirective } from './repeat/repeat.directive';

@NgModule({
  declarations: [
    NgRepeatDirective
  ],
  exports: [
    NgRepeatDirective
  ]
})
export class NgRepeatModule { }
