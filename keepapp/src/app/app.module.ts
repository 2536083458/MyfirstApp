import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage,RunningPage,CyclePage } from '../pages/home/home';
import { MinePage } from '../pages/mine/mine';
import { MydataPage,MydiaryPage,EditdataPage} from '../pages/mine/mine';
import { TrainPage } from '../pages/contact/contact';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MinePage,
    TrainPage,
    MydataPage,MydiaryPage,EditdataPage,WelcomePage,
    RunningPage,CyclePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{model:"ios"}),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MinePage,
    TrainPage,
    MydataPage,MydiaryPage, EditdataPage,
    WelcomePage,RunningPage,CyclePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IonicStorageModule
  ]
})
export class AppModule {}
