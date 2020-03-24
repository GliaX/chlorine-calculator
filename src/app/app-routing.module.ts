import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SodiumHypochloriteComponent } from './sodium-hypochlorite/sodium-hypochlorite.component'
import { CalciumHypochloriteComponent } from './calcium-hypochlorite/calcium-hypochlorite.component'


const routes: Routes = [
  { path: '', component: CalciumHypochloriteComponent },
  { path: 'sodium-hypochlorite', component: SodiumHypochloriteComponent },
  { path: 'calcium-hypochlorite', component: CalciumHypochloriteComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
