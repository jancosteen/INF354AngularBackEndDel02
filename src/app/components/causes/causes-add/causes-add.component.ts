import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { CausesApiService } from "../../../service/causes/causes-api.service";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-causes-add",
  templateUrl: "./causes-add.component.html",
  styleUrls: ["./causes-add.component.scss"]
})
export class CausesAddComponent implements OnInit {
  causesForm: FormGroup;
  cause_id: number = null;
  cause_name: string = "";
  malaria_type_id: number;
  isLoadingResults = false;

  constructor(
    private router: Router,
    private api: CausesApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.causesForm = this.formBuilder.group({
      cause_id: [null, Validators.required],
      cause_name: [null, Validators.required],
      malaria_type_id: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addCause(form).subscribe(
      res => {
        let id = res["_id"];
        this.isLoadingResults = false;
        this.router.navigate(["/causes-detail", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
