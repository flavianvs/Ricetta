import { map } from 'rxjs';
import { RicettaServiceService } from './../services/ricetta-service.service';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiunta-ricetta',
  templateUrl: './aggiunta-ricetta.component.html',
  styleUrl: './aggiunta-ricetta.component.scss'
})
export class AggiuntaRicettaComponent {

  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder, private ricettaServiceService: RicettaServiceService, private router: Router) {}

  ngOnInit() {
    this.recipeForm = this.fb.group({
      titolo: ['', Validators.required],
      descrizione: ['', Validators.required],
      ingredienti: this.fb.array([this.fb.group({ingrediente: ['', Validators.required]})])  // Initialize ingredients as FormArray
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredienti') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.createIngredient());
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      ingrediente: ['', Validators.required]
        });
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onSubmit() {
    const {titolo, descrizione,ingredienti} = this.recipeForm.value;
    const array = ingredienti.map((elem : any) => elem.ingrediente)

    this.ricettaServiceService.addRicetta({titolo, descrizione,ingredienti: array });
  this.router.navigate(['ricette'])
  }

}
