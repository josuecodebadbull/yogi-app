import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassPricesComponent } from './class-prices/class-prices.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'class-prices', component: ClassPricesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
