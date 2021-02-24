import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-local-committee",
  templateUrl: "./local-committee.page.html",
  styleUrls: ["./local-committee.page.scss"],
})
export class LocalCommitteePage implements OnInit {
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
      member: "Shri. Pandharinath Lobhichand Rathod",
      degisination: "Vice Presedent",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "9657591551",
    },

    {
      sr: "3",
      member: "Dr. Uttam Husnaji Manvate",
      degisination: "Secretary",
      address: "At Post Hanegaon Tq. Degloor",
      contact: "9765028969",
    },

    {
      sr: "4",
      member: "Prof. Charanshingh Ramrao Rathod",
      degisination: "Member",
      address: "Shilvani (B), Tanda, Tq. Degloor",
      contact: "8073707917",
    },

    {
      sr: "5",
      member: "Prof. Dilip Ramchandrarao Jadhav",
      degisination: "Member",
      address: "At Post Hanegaon Tq. Degloor",
      contact: "7058466293",
    },

    {
      sr: "6",
      member: "Prof. Umakant Anneppi Biradar",
      degisination: "Member",
      address: "At Post Hanegaon Tq. Degloor",
      contact: "7219876768",
    },

    {
      sr: "7",
      member: "Dr. Suryakant Nagnath Kalaskar",
      degisination: "Member",
      address: "At Post Hanegaon Tq. Degloor",
      contact: "9422988835",
    },

    {
      sr: "8",
      member: "Prof. Sheeladevi Pandurang Kamble",
      degisination: "Member",
      address: "At Post Hanegaon Tq. Degloor",
      contact: "9096985013",
    },
    {
      sr: "9",
      member: "Shri. Bhaurao Bhiku Pawar",
      degisination: "Member",
      address: "At Post Hanegaon Tq. Degloor",
      contact: "9156411762",
    },
    {
      sr: "10",
      member: "Shri. Jaiprakash Madhavrao Zamkade",
      degisination: "Member",
      address: "At Post Hanegaon Tq. Degloor",
      contact: "9623135005",
    },
    {
      sr: "11",
      member: "Shri. Santosh Lalba Surewad",
      degisination: "Member",
      address: "At Post Hanegaon Tq. Degloor",
      contact: "9766844014",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
