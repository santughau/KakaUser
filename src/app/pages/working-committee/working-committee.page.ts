import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-working-committee",
  templateUrl: "./working-committee.page.html",
  styleUrls: ["./working-committee.page.scss"],
})
export class WorkingCommitteePage implements OnInit {
  term; 
  members = [
    {
      sr: "1",
      member: "Shri. Ramrao Lobhichand Rathod",
      degisination: "President",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "9657341653",
    },
    {
      sr: "2",
      member: "Shri. Maroti Baddu Chavan",
      degisination: "Vice Presedent",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "",
    },

    {
      sr: "3",
      member: "Shri. Maroti Dharmaji Pawar",
      degisination: "Treasurer",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "",
    },

    {
      sr: "4",
      member: "Shri. Pandharinath Lobhichand Rathod",
      degisination: "Secretary",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "9657591551",
    },

    {
      sr: "5",
      member: "Shri. Swaroop Ramrao Rathod",
      degisination: "Joint Secretary",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "9423439053",
    },

    {
      sr: "6",
      member: "Shri. Charanshingh Ramrao Rathod",
      degisination: "Member",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "8073707917",
    },

    {
      sr: "7",
      member: "Shri. Laxman Mansingh Pawar",
      degisination: "Member",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "",
    },

    {
      sr: "8",
      member: "Sow. Meera Arun Rathod",
      degisination: "Member",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "",
    },
    {
      sr: "9",
      member: "Sow. Vijayalaxmi Vijaykumar Rathod",
      degisination: "Member",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
