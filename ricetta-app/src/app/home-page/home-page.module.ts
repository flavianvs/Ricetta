import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class HomePageModule { }
