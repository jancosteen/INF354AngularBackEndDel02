import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { AboutApiService } from "../../service/about-api.service";
import { About } from "../about/about";

@Component({
  selector: "app-about-detail",
  templateUrl: "./about-detail.component.html",
  styleUrls: ["./about-detail.component.scss"]
})
export class AboutDetailComponent implements OnInit {
  about: About = { id: null, aboutInfo: "" };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private api: AboutApiService,
    private router: Router
  ) {}

  //get about description
  getAboutDetails(id) {
    this.api.getAbout(id).subscribe(data => {
      this.about = data;
      console.log(this.about);
      this.isLoadingResults = false;
    });
  }

  ngOnInit() {
    this.getAboutDetails(this.route.snapshot.params["id"]);
  }

  deleteAbout(id) {
    this.isLoadingResults = true;
    this.api.deleteAbout(id).subscribe(
      res => {
        this.isLoadingResults = false;
        this.router.navigate(["/about"]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
