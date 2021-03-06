import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { FuturePageComponent } from './future-page/future-page.component';
import { ErrorComponent } from './error/error.component';
import { ElementsComponent } from './elements/elements.component';
import { MoneyManagementComponent } from './money-management/money-management.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'projects/insurance', component: InsuranceComponent },
  { path: 'projects/money-management', component: MoneyManagementComponent },
  { path: 'selenium/elements', component: ElementsComponent },
  { path: 'under-construction/:type', component: FuturePageComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
