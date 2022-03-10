import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  personnes: Personne[] = []; // on initialise Personne avec un tableau vide
  
  constructor() { }
  /**
   * 
   * @param personne ajoute la personne a la base
   */
  ajouterPersonne(personne: Personne) {
    this.personnes.push(personne);
    console.log(this.personnes);
  }
// la fonction toutesLesPersonne qui est un tableau

/**
 * 
 * @returns une copie du tableau contenant toutes les personnes.
 */
  getPersonne() : Personne[] {
    // retourne les personnes du tableau
    return this.personnes.slice();
  }
  
}

