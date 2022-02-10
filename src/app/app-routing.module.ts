import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiTestComponent } from './api-test/api-test.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'products', component: ProductDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: ApiTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
