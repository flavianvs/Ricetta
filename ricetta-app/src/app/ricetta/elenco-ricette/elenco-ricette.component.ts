import { map} from 'rxjs';
import { RicettaServiceService } from './../services/ricetta-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Ricetta } from '../../models/ricetta.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-elenco-ricette',
  templateUrl: './elenco-ricette.component.html',
  styleUrl: './elenco-ricette.component.scss',
})
export class ElencoRicetteComponent implements OnInit {

  ricette!: Ricetta[];
  ricetteSliced!: Ricetta[];
  @ViewChild('paginator') paginator!: MatPaginator
  constructor(private ricettaService: RicettaServiceService) {}
  ngOnInit(): void {
    this.ricettaService.getRicettaSaved$
      .pipe(map((r) => r.ricette))
      .subscribe((r) => {
        this.ricette = r;
        this.ricetteSliced = this.ricette.slice(0, 3);
      });
  }

  onPageChange(event: PageEvent) {
    const { pageIndex, pageSize, previousPageIndex } = event;
    if (typeof previousPageIndex === 'number'){
      if (pageIndex > previousPageIndex) {
        this.ricetteSliced = this.ricette.slice(
          pageIndex * pageSize,
          pageIndex * pageSize + pageSize
        );
      }
    }

      if (previousPageIndex)
        if (pageIndex < previousPageIndex) {
          this.ricetteSliced = this.ricette.slice(
            pageIndex * pageSize,
            previousPageIndex * pageSize
          );
        }
  }

  updateFilteredRecipes(filteredRecipes: Ricetta[]) {
    this.ricette = filteredRecipes;
    this.ricetteSliced = this.ricette.slice(0,3)
    this.paginator.pageIndex = 0;
    console.log(filteredRecipes)
  }
}
