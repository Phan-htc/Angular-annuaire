import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne-ajouter',
  templateUrl: './personne-ajouter.component.html',
  styleUrls: ['./personne-ajouter.component.css']
})
export class PersonneAjouterComponent implements OnInit {

  constructor(private ps: PersonneService) { } // injection de dépendance

  ngOnInit(): void {
  }
  /**
   * 
   * @param form 
   */

  //traiter le formulaire = demande au service Personne d'ajouter la personne
  traiterFormulaire(form: NgForm) {
    console.log(form);
    // Ajouter la personne a la base
    this.ps.ajouterPersonne(this.formValueVersPersonne(form.value));
  form.reset(); // reset demande au formulaire d'éffacer tout les champs
  }

  // Retourne un objet Personne fabriqué à partir des données du form.
  formValueVersPersonne(formValue: any): Personne {
    // on déclare l'objet et on le nomme avec AS 
    return {
      nom: formValue.nom,
      prenom: formValue.prenom,
      telephone: formValue.telephone
    } as Personne;
  }
}
