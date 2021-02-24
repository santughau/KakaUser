import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-other-stuff",
  templateUrl: "./other-stuff.page.html",
  styleUrls: ["./other-stuff.page.scss"],
})
export class OtherStuffPage implements OnInit {
  segVlaue = 1;
  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {
    this.segVlaue = event.target.value;
  }
}
