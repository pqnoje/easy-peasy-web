import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValuableComponent } from '../app/valuable/valuable.component'
const routes: Routes = [
  { path: 'valuables', component: ValuableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
