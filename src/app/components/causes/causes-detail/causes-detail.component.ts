import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { CausesApiService } from "../../../service/causes/causes-api.service";
import { Cause } from "../../causes/causes/cause";

@Component({
  selector: "app-causes-detail",
  templateUrl: "./causes-detail.component.html",
  styleUrls: ["./causes-detail.component.scss"]
})
export class CausesDetailComponent implements OnInit {
  cause: Cause = { id: null, name: "", malaria_type_id: null };
  isLoadingResults = true;

  getCauseDetails(id) {
    this.api.getCause(id).subscribe(data => {
      this.cause = data;
      console.log(this.cause);
      this.isLoadingResults = false;
    });
  }

  constructor(
    private route: ActivatedRoute,
    private api: CausesApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCauseDetails(this.route.snapshot.params["id"]);
  }

  deleteCause(id) {
    this.isLoadingResults = true;
    this.api.deleteCause(id).subscribe(
      res => {
        this.isLoadingResults = false;
        this.router.navigate(["/causes"]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
