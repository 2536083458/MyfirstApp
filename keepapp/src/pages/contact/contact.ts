import { Component ,Input, Output, EventEmitter } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  selectedIndex: number ;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
      // console.log(this.navParams.get('item')); 
   if(this.navParams.get('item')){
       // console.log(this.navParams.get('item')); 
       this.selectedIndex=this.navParams.get('item');
        
    }else{
       this.selectedIndex=0;
    }

  }
  @Input("slides") slides: string[] = ["精选","训练","饮食","商城"];  
  @Input("pageNumber") pageNumber: number = 4;  
  @Output("slideClick") slideClick = new EventEmitter<number>();  

 
  onClick(index) {  
    //console.log(index);
    this.selectedIndex = index;  
    this.slideClick.emit(index);  
    if(index===0){
      this.navCtrl.push(ContactPage,{item:0});
    }else  if(index===1){
      this.navCtrl.push(TrainPage,{item:1});
    }
  }  

  items=[{
     src:"assets/img/aCat.jpg",
     title:"#有氧超人",
  },
  {
     src:"assets/img/catTwo.jpg",
     title:"#一招打败#",
  },
  {
     src:"assets/img/aDog.jpg",
     title:"#毕业季#",
  }
  ];
  actItems=[{
     src:"assets/img/aCat.jpg",
     status:"活动进行中",
     title:"核心改造 训练不设限",
     type:"直播",
  },
  {
     src:"assets/img/catTwo.jpg",
     status:"报名进行中",
     title:"肩部养护 从自测到自疗",
     type:"跑步"
  }];
  groupItems=[{
     src:"assets/img/aCat.jpg",
     srcTwo:"assets/img/aCat.jpg",
     name:"波比跳燃脂",
     nums:553,
  },
  {
     src:"assets/img/catTwo.jpg",
     srcTwo:"assets/img/aCat.jpg",
     name:"跟猫姐姐来打卡",
     nums:890
  }];
  memberItems=[{
     src:"assets/img/aCat.jpg",
     name:"恩桃与",
     quote:"Fitness Bikni Athlete 女子..."
  },
  {
     src:"assets/img/catTwo.jpg",
     name:"李薇薇liwei",
     quote:"xxx创始人 女子..."
  }];
}

@Component({
  templateUrl: 'train.html'
})
export class TrainPage {

  selectedIndex: number ;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
   if(this.navParams.get('item')){
       this.selectedIndex=this.navParams.get('item');
        
    }else{
       this.selectedIndex=1;
    }

  }
  @Input("slides") slides: string[] = ["精选","训练","饮食","商城"];  
  @Input("pageNumber") pageNumber: number = 4;  
  @Output("slideClick") slideClick = new EventEmitter<number>();  

 
  onClick(index) {  
    this.selectedIndex = index;  
    this.slideClick.emit(index);  
    if(index===0){
      this.navCtrl.push(ContactPage,{item:0});
    }else  if(index===1){
      this.navCtrl.push(TrainPage,{item:1});
    }
  }  

   sportsItems=[{
    sportName:"HIIT下肢挑战",
    sportTime:21,
    sportRank:"K1",
    enterPeople:1232132,
    sportSrc:"assets/img/aCat.jpg",
  },{
    sportName:"睡前拉伸",
    sportTime:7,
    sportRank:"K1",
    enterPeople:3213672,
    sportSrc:"assets/img/catTwo.jpg",
  },{
    sportName:"HIIT下肢挑战",
    sportTime:21,
    sportRank:"K1",
    enterPeople:1232132,
    sportSrc:"assets/img/aCat.jpg",
  },{
    sportName:"睡前拉伸",
    sportTime:7,
    sportRank:"K1",
    enterPeople:3213672,
    sportSrc:"assets/img/catTwo.jpg",
  }];
}
