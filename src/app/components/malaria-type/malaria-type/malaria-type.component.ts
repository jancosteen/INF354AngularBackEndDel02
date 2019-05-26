import { Component, OnInit } from "@angular/core";

import { MalariaTypeApiService } from "../../../service/malaria-type/malaria-type-api.service";

import { MalariaType } from "../malaria-type/malaria-type";

@Component({
  selector: "app-malaria-type",
  templateUrl: "./malaria-type.component.html",
  styleUrls: ["./malaria-type.component.scss"]
})
export class MalariaTypeComponent implements OnInit {
  displayedColumns: string[] = ["malType_id", "malType_desc"];
  data: MalariaType[] = [];
  isLoadingResults = true;
  constructor(private api: MalariaTypeApiService) {}

  ngOnInit() {
    this.api.getMalTs().subscribe(
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
