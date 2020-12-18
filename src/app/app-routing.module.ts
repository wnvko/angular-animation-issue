import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { SecondaryComponent } from "./secondary/secondary.component";

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "secondary", component: SecondaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
