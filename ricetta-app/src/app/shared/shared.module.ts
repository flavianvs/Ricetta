import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltraRicetteDirective } from './directives/filtra-ricette.directive';
import { FormatDatePipe } from './pipes/format-date.pipe';



@NgModule({
  declarations: [
    FiltraRicetteDirective,
    FormatDatePipe
  ],
  exports: [FiltraRicetteDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
