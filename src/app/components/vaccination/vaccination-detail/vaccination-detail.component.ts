import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { VacApiService } from "../../../service/vaccination/vac-api.service";
import { Vaccination } from "../../vaccination/vaccination/vaccination";

@Component({
  selector: "app-vaccination-detail",
  templateUrl: "./vaccination-detail.component.html",
  styleUrls: ["./vaccination-detail.component.scss"]
})
export class VaccinationDetailComponent implements OnInit {
  vaccination: Vaccination = { id: null, vac_desc: "" };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private api: VacApiService,
    private router: Router
  ) {}

  getVacDetails(id) {
    this.api.getVac(id).subscribe(data => {
      this.vaccination = data;
      console.log(this.vaccination);
      this.isLoadingResults = false;
    });
  }

  ngOnInit() {
    this.getVacDetails(this.route.snapshot.params["id"]);
  }

  deleteVac(id) {
    this.isLoadingResults = true;
    this.api.deleteVac(id).subscribe(
      res => {
        this.isLoadingResults = false;
        this.router.navigate(["/vaccination"]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
