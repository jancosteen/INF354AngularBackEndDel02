import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { AboutApiService } from "../../service/about-api.service";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-about-add",
  templateUrl: "./about-add.component.html",
  styleUrls: ["./about-add.component.scss"]
})
export class AboutAddComponent implements OnInit {
  aboutForm: FormGroup;
  about_id: number = null;
  about_descr: string = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private api: AboutApiService,
    private formBuilder: FormBuilder
  ) {}

  //Unable to make quotation marks
  ngOnInit() {
    this.aboutForm = this.formBuilder.group({
      about_id: [null, Validators.required],
      about_descr: [null, Validators.required]
    });
  }
  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addAbout(form).subscribe(
      res => {
        let id = res["about_id"];
        this.isLoadingResults = false;
        this.router.navigate(["/about-details", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
