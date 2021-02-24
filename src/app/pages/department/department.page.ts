import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-department",
  templateUrl: "./department.page.html",
  styleUrls: ["./department.page.scss"],
})
export class DepartmentPage implements OnInit {
  segVlaue = 1;
  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {
    this.segVlaue = event.target.value;
  }
}
