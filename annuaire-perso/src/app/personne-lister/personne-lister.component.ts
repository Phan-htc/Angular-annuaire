import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne-lister',
  templateUrl: './personne-lister.component.html',
  styleUrls: ['./personne-lister.component.css']
})
export class PersonneListerComponent implements OnInit {

  PersonneAAfficher : Personne[] = []; 
  constructor(private ps : PersonneService) { 
    this.PersonneAAfficher = ps.getPersonne();
  }

  ngOnInit(): void {
  }

}
