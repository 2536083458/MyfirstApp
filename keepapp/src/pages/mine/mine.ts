import { Component } from '@angular/core';
import {  NavController, NavParams,ActionSheetController  } from 'ionic-angular';

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  sportMinutes:number=38;
  itemSelected(item:string){
     console.log(item);
  }
  openMydata(){
    this.navCtrl.push(MydataPage);
  }

}

@Component({
  templateUrl: 'mydata.html'
})
export class MydataPage{

  constructor(public navCtrl: NavController, public navParams: NavParams){

   }
  trainItems=[{
    trainName:"零基础适应性训练",
    trainTime:21,
    trainRank:"K1",
    lastTrain:"上次训练5天前",
    downloadStatus:"已下载",
    finished:1,
  },{
    trainName:"HIIT适应性训练",
    trainTime:23,
    trainRank:"K1",
    lastTrain:"上次训练5天前",
    downloadStatus:"已下载",
    finished:3,
  },{
    trainName:"跑步机有氧慢跑",
    trainTime:40,
    trainRank:"K2",
    lastTrain:"还未进行训练",
    downloadStatus:"",
    finished:2,
  },{
    trainName:"零基础适应性训练",
    trainTime:21,
    trainRank:"K1",
    lastTrain:"上次训练5天前",
    downloadStatus:"",
    finished:4,
  }];
  mydiary=[{
    id:1,
    diaryTime:"2017-06-24",
    diaryMinute:"15:20",
    diaryContent:"运动使我快乐，运动的意义在于健康，流汗促进身心健康发展",
    diaryDiscuss:8,
    diaryThumbs:12,
  },{
    id:2,
    diaryTime:"2017-06-25",
    diaryMinute:"14:20",
    diaryContent:"运动使我快乐，运动的意快乐，运动的意快乐，运动的意快乐，运动的意义在于健康，流汗促进身心健康发展",
    diaryDiscuss:5,
    diaryThumbs:15,
  }];
  openMydiary(item){
   // console.log(item);
    this.navCtrl.push(MydiaryPage,item);
  }
  editData(){
     this.navCtrl.push(EditdataPage);
  }
}

@Component({
  templateUrl: 'mydiary.html'
})
export class MydiaryPage{
   
   constructor(public navCtrl: NavController, public navParams: NavParams){
       //console.log(this.navParams);
   }
   backToLast(){
     this.navCtrl.push(MydataPage);
   }
    diaryTime=this.navParams.get('diaryTime');
    diaryMinute=this.navParams.get('diaryMinute');
    diaryContent=this.navParams.get('diaryContent');
    diaryDiscuss=this.navParams.get('diaryDiscuss');
    diaryThumbs=this.navParams.get('diaryThumbs');
  
}

@Component({
  templateUrl: 'editdata.html'
})
export class EditdataPage{

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public actionSheetCtrl: ActionSheetController){

   }
   mydata={ 
     cuteName:"光阳bin",
     birthday: '1995-10-19',
     description:"我是一个认真负责对待任何事情的人呢",
     uimg:"assets/img/aCat.jpg"
    }
    useASComponent() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择',
      buttons: [
        {
          text: '拍照',
          handler: () => {
           // this.startCamera();
          }
        },
        {
          text: '相册',
          handler: () => {
          //this.openImgPicker();
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }
  
}
