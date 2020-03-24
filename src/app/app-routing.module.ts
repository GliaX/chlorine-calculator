import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SodiumChloriteComponent } from './sodium-chlorite/sodium-chlorite.component'
import { CalciumChloriteComponent } from './calcium-chlorite/calcium-chlorite.component'


const routes: Routes = [
  { path: '', component: CalciumChloriteComponent },
  { path: 'sodium-chlorite', component: SodiumChloriteComponent },
  { path: 'calcium-chlorite', component: CalciumChloriteComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
