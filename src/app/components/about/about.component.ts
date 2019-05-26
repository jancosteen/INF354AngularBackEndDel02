import { Component, OnInit } from "@angular/core";

import { AboutApiService } from "../../service/about-api.service";

import { About } from "../about/about";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  displayedColumns: string[] = ["about_id", "about_descr"];
  data: About[] = [];
  isLoadingResults = true;
  constructor(private api: AboutApiService) {}

  ngOnInit() {
    this.api.getAbouts().subscribe(
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
