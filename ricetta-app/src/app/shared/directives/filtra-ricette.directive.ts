import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, input, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Ricetta } from '../../models/ricetta.model';

@Directive({
  selector: '[appFiltraRicette]'
})
export class FiltraRicetteDirective implements OnChanges{
  @Input() array!: Ricetta[];
  @Output() filteredRecipesChange = new EventEmitter<any[]>();
  arrayCopy: Ricetta[] = [];
  constructor(private el: ElementRef) { }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.arrayCopy.length === 0){
      this.arrayCopy = changes['array'].currentValue
    }
  }



  @HostListener('input', ['$event.target.value']) onClick(value: string) {
     const arrayFiltered = this.array.filter(r =>
      r.titolo.toLowerCase().startsWith(value.toLowerCase()) || r.ingredienti.some(i => i.toLowerCase().startsWith(value)))
     if (value !== ''){
      this.filteredRecipesChange.emit(arrayFiltered)
     }else{
      this.filteredRecipesChange.emit(this.arrayCopy)
     }

     if(arrayFiltered.length === 0 && this.arrayCopy.filter(r =>
      r.titolo.toLowerCase().startsWith(value.toLowerCase()) || r.ingredienti.some(i => i.toLowerCase().startsWith(value))).length > 0
    && this.arrayCopy.filter(r =>
      r.titolo.toLowerCase().startsWith(value.toLowerCase()) || r.ingredienti.some(i => i.toLowerCase().startsWith(value))).length < this.arrayCopy.length){
        this.filteredRecipesChange.emit(
          this.arrayCopy.filter(r =>
            r.titolo.toLowerCase().startsWith(value.toLowerCase()) || r.ingredienti.some(i => i.toLowerCase().startsWith(value)))
        )
      }


  }
}
