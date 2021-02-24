import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home",
    },
    {
      title: "Principal",
      url: "/principal",
      icon: "person",
    },
    {
      title: "Working Committee",
      url: "/working-committee",
      icon: "heart",
    },
    {
      title: "Local Committee",
      url: "/local-committee",
      icon: "archive",
    },
    {
      title: "Teaching",
      url: "/teaching",
      icon: "book",
    },
    {
      title: "Non Teaching",
      url: "/non-teaching",
      icon: "bulb",
    },

    {
      title: "Department",
      url: "/department",
      icon: "folder",
    },

    {
      title: "Other Stuff",
      url: "/other-stuff",
      icon: "server",
    },
    {
      title: "Notices",
      url: "/notices",
      icon: "create",
    },
    {
      title: "Download",
      url: "/download",
      icon: "download",
    },
    {
      title: "Gallery",
      url: "/gallery",
      icon: "images",
    },
    {
      title: "Videos",
      url: "/video",
      icon: "videocam",
    },

    {
      title: "Contact Us",
      url: "/contact-us",
      icon: "mail",
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
