import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { FoodorderComponent } from './foodorder/foodorder.component';
import { CouponsComponent } from './coupons/coupons.component';

const routes: Routes = [{path:'home',component: HomeComponent},
{path:'Service',component: ServiceComponent},
{path:'contact',component: ContactComponent},
{path:'Foodorder',component: FoodorderComponent},
{path:'coupons',component: CouponsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
