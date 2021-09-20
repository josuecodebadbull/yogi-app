import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassPricesComponent } from './class-prices/class-prices.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'class-prices', component: ClassPricesComponent },
  { path: 'practice', component: PracticeComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
