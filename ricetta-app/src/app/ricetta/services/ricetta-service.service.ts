import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ricetta } from '../../models/ricetta.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RicettaServiceService {

  private getRicetta$ = new BehaviorSubject<{ricette:Ricetta[]}>({ricette: []});
  getRicettaSaved$ = this.getRicetta$.asObservable();
  constructor(private http: HttpClient) {
   }

   getRicette() {
     this.http.get<{ricette:Ricetta[]}>('/assets/ricette.json').subscribe(ricette => this.getRicetta$.next(ricette));
   }

   addRicetta(ricetta: Ricetta) {
    this.getRicetta$.next({ricette:[...this.getRicetta$.getValue().ricette, ricetta]})
  }
}
