import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
<<<<<<< HEAD
=======
  {path: 'signin', component: SigninComponent},
>>>>>>> 314c00103bdb751107432e2ed0966a435ac32b06
  {path: 'home/home', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class RoutingModule {}
