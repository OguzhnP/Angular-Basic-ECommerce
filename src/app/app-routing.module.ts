import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
  {
    path :"",
    component:LayoutComponent,
    children:[
      {
        path:"",
        component: HomeComponent
      },
      {
        path:"basket",
        component: BasketComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
