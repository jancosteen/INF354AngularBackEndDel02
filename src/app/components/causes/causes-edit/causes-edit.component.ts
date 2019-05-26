import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
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
  selector: "app-causes-edit",
  templateUrl: "./causes-edit.component.html",
  styleUrls: ["./causes-edit.component.scss"]
})
export class CausesEditComponent implements OnInit {
  causesForm: FormGroup;
  _id: number = null;
  cause_name: string = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: CausesApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCause(this.route.snapshot.params["id"]);
    this.causesForm = this.formBuilder.group({
      cause_name: [null, Validators.required]
    });
  }
  getCause(id) {
    this.api.getCause(id).subscribe(data => {
      this._id = data.id;
      this.causesForm.setValue({
        cause_name: data.name
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateCause(this._id, form).subscribe(
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

  causesDetails() {
    this.router.navigate(["/causes-detail", this._id]);
  }
}
