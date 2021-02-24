import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { MyServiceService } from "../app/shared/my-service.service";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { HttpClientModule } from "@angular/common/http";
import { AdMobFree } from "@ionic-native/admob-free/ngx";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    MyServiceService,
    AdMobFree,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
