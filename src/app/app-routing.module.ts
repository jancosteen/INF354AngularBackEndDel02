import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";

//add component imports
import { AboutDetailComponent } from "./components/about-detail/about-detail.component";
import { AboutAddComponent } from "./components/about-add/about-add.component";
import { AboutEditComponent } from "./components/about-edit/about-edit.component";

import { CausesComponent } from "./components/causes/causes/causes.component";
import { CausesAddComponent } from "./components/causes/causes-add/causes-add.component";
import { CausesEditComponent } from "./components/causes/causes-edit/causes-edit.component";
import { CausesDetailComponent } from "./components/causes/causes-detail/causes-detail.component";

import { VaccinationComponent } from "./components/vaccination/vaccination/vaccination.component";
import { VaccinationAddComponent } from "./components/vaccination/vaccination-add/vaccination-add.component";
import { VaccinationEditComponent } from "./components/vaccination/vaccination-edit/vaccination-edit.component";
import { VaccinationDetailComponent } from "./components/vaccination/vaccination-detail/vaccination-detail.component";

import { MalariaTypeComponent } from "./components/malaria-type/malaria-type/malaria-type.component";
import { MalariaTypeDetailComponent } from "./components/malaria-type/malaria-type-detail/malaria-type-detail.component";
import { MalariaTypeAddComponent } from "./components/malaria-type/malaria-type-add/malaria-type-add.component";
import { MalariaTypeEditComponent } from "./components/malaria-type/malaria-type-edit/malaria-type-edit.component";

const routes: Routes = [
  { path: "about", component: AboutComponent, data: { title: "About Page" } },
  {
    path: "about-detail",
    component: AboutDetailComponent,
    data: { title: "About Details" }
  },
  {
    path: "about-add",
    component: AboutAddComponent,
    data: { title: "Add About" }
  },
  {
    path: "about-edit",
    component: AboutEditComponent,
    data: { title: "Edit About" }
  },
  {
    path: "causes",
    component: CausesComponent,
    data: { title: "Causes Page" }
  },
  {
    path: "causes-detail",
    component: CausesDetailComponent,
    data: { title: "Causes Details" }
  },
  {
    path: "causes-add",
    component: CausesAddComponent,
    data: { title: "Add Causes" }
  },
  {
    path: "causes-edit",
    component: CausesEditComponent,
    data: { title: "Edit Causes" }
  },
  {
    path: "vaccination",
    component: VaccinationComponent,
    data: { title: "Vaccination Page" }
  },
  {
    path: "vaccination-detail",
    component: VaccinationDetailComponent,
    data: { title: "Vaccination Detail" }
  },
  {
    path: "vaccination-add",
    component: VaccinationAddComponent,
    data: { title: "Add Vaccination" }
  },
  {
    path: "vaccination-edit",
    component: VaccinationEditComponent,
    data: { title: "Edit Vaccination" }
  },
  {
    path: "malaria-type",
    component: MalariaTypeComponent,
    data: { title: "Malaria Type Page" }
  },
  {
    path: "malaria-type-detail",
    component: MalariaTypeDetailComponent,
    data: { title: "Malaria Type Details" }
  },
  {
    path: "malaria-type-add",
    component: MalariaTypeAddComponent,
    data: { title: "Add Malaria Type" }
  },
  {
    path: "malaria-type-edit",
    component: MalariaTypeEditComponent,
    data: { title: "Edit Malaria Types" }
  },
  { path: "", redirectTo: "/about", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
