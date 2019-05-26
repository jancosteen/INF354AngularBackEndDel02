import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { MalariaTypeApiService } from "../../../service/malaria-type/malaria-type-api.service";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-malaria-type-add",
  templateUrl: "./malaria-type-add.component.html",
  styleUrls: ["./malaria-type-add.component.scss"]
})
export class MalariaTypeAddComponent implements OnInit {
  malTForm: FormGroup;
  malT_desc: string = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private api: MalariaTypeApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.malTForm = this.formBuilder.group({
      malT_desc: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addMalT(form).subscribe(
      res => {
        let id = res["_id"];
        this.isLoadingResults = false;
        this.router.navigate(["/malaria-type-detail", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
