import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { AboutDetailComponent } from "./components/about-detail/about-detail.component";
import { AboutAddComponent } from "./components/about-add/about-add.component";
import { AboutEditComponent } from "./components/about-edit/about-edit.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MalariaTypeComponent } from "./components/malaria-type/malaria-type/malaria-type.component";
import { MalariaTypeAddComponent } from "./components/malaria-type/malaria-type-add/malaria-type-add.component";
import { MalariaTypeDetailComponent } from "./components/malaria-type/malaria-type-detail/malaria-type-detail.component";
import { MalariaTypeEditComponent } from "./components/malaria-type/malaria-type-edit/malaria-type-edit.component";

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from "@angular/material";

import { CausesComponent } from "./components/causes/causes/causes.component";
import { CausesAddComponent } from "./components/causes/causes-add/causes-add.component";
import { CausesEditComponent } from "./components/causes/causes-edit/causes-edit.component";
import { CausesDetailComponent } from "./components/causes/causes-detail/causes-detail.component";
import { VaccinationComponent } from "./components/vaccination/vaccination/vaccination.component";
import { VaccinationAddComponent } from "./components/vaccination/vaccination-add/vaccination-add.component";
import { VaccinationDetailComponent } from "./components/vaccination/vaccination-detail/vaccination-detail.component";
import { VaccinationEditComponent } from "./components/vaccination/vaccination-edit/vaccination-edit.component";
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutDetailComponent,
    AboutAddComponent,
    AboutEditComponent,
    CausesComponent,
    CausesAddComponent,
    CausesEditComponent,
    CausesDetailComponent,
    VaccinationComponent,
    VaccinationAddComponent,
    VaccinationDetailComponent,
    VaccinationEditComponent,
    MalariaTypeComponent,
    MalariaTypeAddComponent,
    MalariaTypeDetailComponent,
    MalariaTypeEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
