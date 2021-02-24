import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-teaching",
  templateUrl: "./teaching.page.html",
  styleUrls: ["./teaching.page.scss"],
})
export class TeachingPage implements OnInit {
  teacher = [
    {
      sr: "1",
      name: "Manwate Uttam Husnaji",
      degisination: "Principal",
      education: "NET,Ph.D.",
      department: "Pol.Sci",
      subject: "Pol.Sc",
      image: "manwate.jpg",
    },
    {
      sr: "2",
      name: "Sabne Ashok Gangaram",
      degisination: "Assit. Professor",
      education: "M.Phill,Ph.D.",
      department: "History",
      subject: "History",
      image: "default.jpg",
    },
    {
      sr: "3",
      name: "Dr. Kalaskar Suryakant Nagnath",
      degisination: "Assit. Professor",
      education: "M.Phill,Ph.D",
      department: "Geography",
      subject: "Geography",
      image: "KalaskarSuryakant.jpeg",
    },
    {
      sr: "4",
      name: "Biradar Umakant Anneppa",
      degisination: "Assit. Professor",
      education: "M.Phill",
      department: "Hindi",
      subject: "Hindi",
      image: "biradar.jpg",
    },
    {
      sr: "5",
      name: "Jadhav Dilip Ramchandrarao",
      degisination: "Assit. Professor",
      education: "M.Phill",
      department: "Marathi",
      subject: "Marathi",
      image: "jadhav.jpg",
    },
    {
      sr: "6",
      name: "Kamble Sunita Shankarrao",
      degisination: "Assit. Professor",
      education: "M.A.",
      department: "Marathi",
      subject: "Marathi",
      image: "kambless.jpg",
    },
    {
      sr: "7",
      name: "Sagave Vasant Namdevrao",
      degisination: "Assit. Professor",
      education: "M.Phill",
      department: "Geography",
      subject: "Geography",
      image: "sagave1.jpg",
    },
    {
      sr: "8",
      name: "Shinde Anandrao Ravan",
      degisination: "Assit. Professor",
      education: "SET,Ph.D",
      department: "Pub. Admn.",
      subject: "Pub. Admn.",
      image: "shindesir.jpg",
    },
    {
      sr: "9",
      name: "Kamble Shila Pandurang",
      degisination: "Assit. Professor",
      education: "SET",
      department: "Economics",
      subject: "Economics",
      image: "kambleSP.jpg",
    },
    {
      sr: "10",
      name: "Emekar Pavan Nagnath",
      degisination: "Assit. Professor",
      education: "NET,Ph.D.",
      department: "Hindi",
      subject: "Hindi",
      image: "yemekar.jpg",
    },
    {
      sr: "11",
      name: "Hangargekar Vithal Nivruti",
      degisination: "Librarian",
      education: "M.Phill",
      department: "Library",
      subject: "Library Science",
      image: "hangerkekar.jpg",
    },
  ];
  term; 
  constructor() {}

  ngOnInit() {}
}
