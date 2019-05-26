import { Component, OnInit } from "@angular/core";

import { VacApiService } from "../../../service/vaccination/vac-api.service";
import { Vaccination } from "../vaccination/vaccination";

@Component({
  selector: "app-vaccination",
  templateUrl: "./vaccination.component.html",
  styleUrls: ["./vaccination.component.scss"]
})
export class VaccinationComponent implements OnInit {
  displayedColumns: string[] = ["vac_id", "vac_desc"];
  data: Vaccination[] = [];
  isLoadingResults = true;

  constructor(private api: VacApiService) {}

  ngOnInit() {
    this.api.getVacs().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
