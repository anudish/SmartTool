import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components import
import { MainComponent } from './main/main.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RevenueComponent } from './revenueForm/revenueForm.component';
import { GraphAnalyticsComponent } from './graph-analytics/graph-analytics.component';
import { ClientDisplayComponent } from './client-display/client-display.component';

// URL path definitions
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },  // Index page
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'revenueForm', component: RevenueComponent },
  {path:'smartanalysis',component: GraphAnalyticsComponent},
  {path: 'clients', component: ClientDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
