import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PersonneAjouterComponent } from './personne-ajouter/personne-ajouter.component';
import { PersonneListerComponent } from './personne-lister/personne-lister.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'apropos', component: AProposComponent},
  {path:'personne-ajouter', component: PersonneAjouterComponent},
  {path:'personne-lister', component: PersonneListerComponent},
  {path:'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
