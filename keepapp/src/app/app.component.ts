import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import {  WelcomePage } from '../pages/welcome/welcome';
//import { RunningPage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  //rootPage:any = TabsPage;
  //rootPage:any = TrainPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage: Storage) {
   // this.rootPage=TabsPage;
    this.storage.get('firstIn').then((result) => {      
      if(result){  
        this.storage.set('firstIn', false);
        this.rootPage = TabsPage; 
      } 
      else{
        this.storage.set('firstIn', true);
        this.rootPage = WelcomePage;
      }
            
    }
    );  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
