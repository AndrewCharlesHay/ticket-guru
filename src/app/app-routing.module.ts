import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { PerformancesComponent } from './performances/performances.component';

const routes: Routes = [
  { path:'', redirectTo:'performances', pathMatch: 'full'},
  { path: 'checkout/:levelId', component: CheckoutComponent },
  { path: 'performances', component: PerformancesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
