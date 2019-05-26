import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
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
  selector: "app-about-edit",
  templateUrl: "./about-edit.component.html",
  styleUrls: ["./about-edit.component.scss"]
})
export class AboutEditComponent implements OnInit {
  aboutForm: FormGroup;
  _id: number = null;
  about_descr: string = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: AboutApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getAbout(this.route.snapshot.params["id"]);
    this.aboutForm = this.formBuilder.group({
      about_descr: [null, Validators.required]
    });
  }

  getAbout(id) {
    this.api.getAbout(id).subscribe(data => {
      this._id = data.id;
      this.aboutForm.setValue({
        about_descr: data.aboutInfo
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateAbout(this._id, form).subscribe(
      res => {
        let id = res["_id"];
        this.isLoadingResults = false;
        this.router.navigate(["/about-detail", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  aboutDetails() {
    this.router.navigate(["/about-detail", this._id]);
  }
}
