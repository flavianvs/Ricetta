import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElencoRicetteComponent } from './elenco-ricette/elenco-ricette.component';
import { AggiuntaRicettaComponent } from './aggiunta-ricetta/aggiunta-ricetta.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ElencoRicetteComponent },
  { path: 'new', component: AggiuntaRicettaComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    ElencoRicetteComponent,
    AggiuntaRicettaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    MatPaginatorModule,
    MatInputModule,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RicettaModule { }
