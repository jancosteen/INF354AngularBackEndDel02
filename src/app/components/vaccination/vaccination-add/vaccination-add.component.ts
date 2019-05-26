import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { VacApiService } from "../../../service/vaccination/vac-api.service";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-vaccination-add",
  templateUrl: "./vaccination-add.component.html",
  styleUrls: ["./vaccination-add.component.scss"]
})
export class VaccinationAddComponent implements OnInit {
  vacForm: FormGroup;
  vac_id: number = null;
  vac_desc: string = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private api: VacApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.vacForm = this.formBuilder.group({
      vac_id: [null, Validators.required],
      vac_desc: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addVac(form).subscribe(
      res => {
        let id = res["_id"];
        this.isLoadingResults = false;
        this.router.navigate(["/vaccination-details", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
