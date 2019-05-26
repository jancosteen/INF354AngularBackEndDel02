import { Component, OnInit } from "@angular/core";

import { CausesApiService } from "../../../service/causes/causes-api.service";

import { Cause } from "../causes/cause";

@Component({
  selector: "app-causes",
  templateUrl: "./causes.component.html",
  styleUrls: ["./causes.component.scss"]
})
export class CausesComponent implements OnInit {
  displayedColumns: string[] = ["cause_id", "cause_name"];
  data: Cause[] = [];
  isLoadingResults = true;

  constructor(private api: CausesApiService) {}

  ngOnInit() {
    this.api.getCauses().subscribe(
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
