import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { MalariaTypeApiService } from "../../../service/malaria-type/malaria-type-api.service";
import { MalariaType } from "../malaria-type/malaria-type";

@Component({
  selector: "app-malaria-type-detail",
  templateUrl: "./malaria-type-detail.component.html",
  styleUrls: ["./malaria-type-detail.component.scss"]
})
export class MalariaTypeDetailComponent implements OnInit {
  type: MalariaType = { id: null, malType_desc: "" };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private api: MalariaTypeApiService,
    private router: Router
  ) {}
  getMalTDetails(id) {
    this.api.getMalT(id).subscribe(data => {
      this.type = data;
      console.log(this.type);
      this.isLoadingResults = false;
    });
  }

  ngOnInit() {
    this.getMalTDetails(this.route.snapshot.params["id"]);
  }

  deleteMalT(id) {
    this.isLoadingResults = true;
    this.api.deleteMalT(id).subscribe(
      res => {
        this.isLoadingResults = false;
        this.router.navigate(["/malaria-type"]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
