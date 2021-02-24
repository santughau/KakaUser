import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-non-teaching",
  templateUrl: "./non-teaching.page.html",
  styleUrls: ["./non-teaching.page.scss"],
})
export class NonTeachingPage implements OnInit {
  term;
  teacher = [
    {
      sr: "1",
      name: "Pawar Bahurao Bhikku",
      degisination: "Head Clerk",
      education: "BA",
      image: "pawar.jpg",
    },
    {
      sr: "2",
      name: "Zamkade Jayprakash Madhavrao",
      degisination: "Jr. Clerk",
      education: "BA",
      image: "zamkade.jpg",
    },
    {
      sr: "3",
      name: "Rathod Shankar Bhimrao",
      degisination: "Lib. Attendent",
      education: "HSC",
      image: "default.jpg",
    },
    {
      sr: "4",
      name: "Chavan Maroti Sakharam",
      degisination: "Peon",
      education: "SSC",
      image: "chavan.jpg",
    },
    {
      sr: "5",
      name: "Surewad Santhosh Lalba",
      degisination: "Peon",
      education: "SSC ",
      image: "surewad.jpg",
    },
    {
      sr: "6",
      name: "Machkuri Jalil Nabisab",
      degisination: "Peon",
      education: "BA",
      image: "s.jpg",
    },
    {
      sr: "7",
      name: "Waghmare Venkat Vithoba",
      degisination: "Peon",
      education: "BA",
      image: "wagmare.jpg",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
