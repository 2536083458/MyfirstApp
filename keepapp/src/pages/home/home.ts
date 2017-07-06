import { Component,ElementRef } from '@angular/core';
import { NavController,Platform  } from 'ionic-angular';
import { TrainPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openPage(){
    this.navCtrl.push(RunningPage);
  }
  openPage2(){
    this.navCtrl.push(CyclePage);
  }
  addTrain(){
    this.navCtrl.push(TrainPage);
  }
  trainItems=[{
    trainName:"零基础适应性训练",
    trainTime:21,
    trainRank:"K1",
    lastTrain:"上次训练5天前",
    downloadStatus:"已下载",
  },{
    trainName:"HIIT适应性训练",
    trainTime:23,
    trainRank:"K1",
    lastTrain:"上次训练5天前",
    downloadStatus:"已下载",
  },{
    trainName:"跑步机有氧慢跑",
    trainTime:40,
    trainRank:"K2",
    lastTrain:"还未进行训练",
    downloadStatus:"",
  },{
    trainName:"零基础适应性训练",
    trainTime:21,
    trainRank:"K1",
    lastTrain:"上次训练5天前",
    downloadStatus:"",
  }];
  sportsItems=[{
    sportName:"HIIT下肢挑战",
    sportTime:21,
    sportRank:"K1",
    sportSrc:"assets/img/aCat.jpg",
  },{
    sportName:"睡前拉伸",
    sportTime:7,
    sportRank:"K1",
    sportSrc:"assets/img/catTwo.jpg",
  }];

}

@Component({
  templateUrl: 'running.html'
})
export class RunningPage {

  openTrain(){
    this.navCtrl.push(HomePage);
  }
   openPage2(){
    this.navCtrl.push(CyclePage);
  }
  minHeight:number;
  constructor(public navCtrl: NavController,private el: ElementRef,public platform: Platform) {
     this.platform.ready().then(() => {
       this.minHeight = el.nativeElement.scrollHeight;
       console.log(this.minHeight);
     }); 
  }
  sportsItems=[{
    sportName:"HIIT下肢挑战",
    sportTime:21,
    sportRank:"K1",
    sportSrc:"assets/img/aCat.jpg",
  },{
    sportName:"睡前拉伸",
    sportTime:7,
    sportRank:"K1",
    sportSrc:"assets/img/catTwo.jpg",
  }];
  runningMachine: string = "machine";
}


@Component({
  templateUrl: 'cycle.html'
})
export class CyclePage {

  minHeight:number;
  constructor(public navCtrl: NavController,private el: ElementRef,public platform: Platform) {
     this.platform.ready().then(() => {
       this.minHeight = el.nativeElement.scrollHeight;
       console.log(this.minHeight);
     }); 
  }
  openTrain(){
    this.navCtrl.push(HomePage);
  }
   openPage2(){
    this.navCtrl.push(RunningPage);
  }
  sportsItems=[{
    sportName:"HIIT下肢挑战",
    sportTime:21,
    sportRank:"K1",
    sportSrc:"assets/img/aCat.jpg",
  },{
    sportName:"睡前拉伸",
    sportTime:7,
    sportRank:"K1",
    sportSrc:"assets/img/catTwo.jpg",
  }];
  runningMachine: string = "machine";
}

