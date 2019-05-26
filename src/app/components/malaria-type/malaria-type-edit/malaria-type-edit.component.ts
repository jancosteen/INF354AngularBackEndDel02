import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
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
  selector: "app-malaria-type-edit",
  templateUrl: "./malaria-type-edit.component.html",
  styleUrls: ["./malaria-type-edit.component.scss"]
})
export class MalariaTypeEditComponent implements OnInit {
  malTForm: FormGroup;
  id: number = null;
  malT_desc: string = "";
  isLoadingResults = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: MalariaTypeApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getMalT(this.route.snapshot.params["id"]);
    this.malTForm = this.formBuilder.group({
      malT_desc: [null, Validators.required]
    });
  }

  getMalT(id) {
    this.api.getMalT(id).subscribe(data => {
      this.id = data.id;
      this.malTForm.setValue({
        malT_desc: data.malType_desc
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateMalT(this.id, form).subscribe(
      res => {
        let id = res["_id"];
        this.isLoadingResults = false;
        this.router.navigate(["/malaria-type-details", id]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  malTDetails() {
    this.router.navigate(["/malaria-type-details", this.id]);
  }
}
