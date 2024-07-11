import { Component } from '@angular/core';
import { RicettaServiceService } from '../../ricetta/services/ricetta-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  constructor(private ricettaService: RicettaServiceService) {
    this.ricettaService.getRicette();
  }

}
