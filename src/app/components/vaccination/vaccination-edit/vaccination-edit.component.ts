import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
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
  selector: "app-vaccination-edit",
  templateUrl: "./vaccination-edit.component.html",
  styleUrls: ["./vaccination-edit.component.scss"]
})
export class VaccinationEditComponent implements OnInit {
  productForm: FormGroup;
  _id: number = null;
  vac_desc: string = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: VacApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getVac(this.route.snapshot.params["id"]);
    this.productForm = this.formBuilder.group({
      vac_desc: [null, Validators.required]
    });
  }

  getVac(id) {
    this.api.getVac(id).subscribe(data => {
      this._id = data.id;
      this.productForm.setValue({
        vac_desc: data.vac_desc
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateVac(this._id, form).subscribe(
      res => {
        let id = res["_id"];
        this.isLoadingResults = false;
        this.router.navigate(["/vaccination-detail", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  vacDetails() {
    this.router.navigate(["/vaccination-detail", this._id]);
  }
}
