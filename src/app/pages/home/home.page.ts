import { Component, OnInit } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig,
} from "@ionic-native/admob-free/ngx";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  slideOpts = {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  constructor(private admobFree: AdMobFree, private plt: Platform) {}

  ngOnInit() {
   
      
         let bannerConfig: AdMobFreeBannerConfig = {
           isTesting: true,
           autoShow: true,
           id: "ca-app-pub-4151366218309776/9360710420",
         };
         this.admobFree.banner.config(bannerConfig);
         this.admobFree.banner.prepare();
          let interstitialConfig: AdMobFreeInterstitialConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-4151366218309776/9320062416",
          };
          this.admobFree.interstitial.config(interstitialConfig);
          this.admobFree.interstitial.prepare();

          let RewardVideoConfig: AdMobFreeRewardVideoConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-4151366218309776/6211802904",
          };
          this.admobFree.rewardVideo.config(RewardVideoConfig);
          this.admobFree.rewardVideo.prepare();        
       
   

    
  }
}
