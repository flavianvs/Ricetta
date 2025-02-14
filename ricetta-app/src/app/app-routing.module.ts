import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home-page/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent,
    children: [
      {path: 'ricette', loadChildren : ()=> import('./ricetta/ricetta.module').then(m=>m.RicettaModule) }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
