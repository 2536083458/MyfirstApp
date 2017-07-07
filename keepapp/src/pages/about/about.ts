import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  hotItems=[{
    src:"assets/img/bji04200089.jpg",
    srcTwo:"assets/img/bji04200089.jpg",
    content:"this is my dynamic content",
    userName:"晨宁",
    thumbs:89,
    itemIndex:0,
  },{
    src:"assets/img/aDog.jpg",
    srcTwo:"assets/img/bji04200089.jpg",
    content:"my second  content is here",
    userName:"zhaobinbin",
    thumbs:189,
    itemIndex:1,
  },{
    src:"assets/img/dogTwo.jpg",
    srcTwo:"assets/img/bji04200089.jpg",
    content:"my third  content is here",
    userName:"hesewe",
    thumbs:289,
    itemIndex:2,
  },{
    src:"assets/img/bji04200089.jpg",
    srcTwo:"assets/img/bji04200089.jpg",
    content:"my forth  content is here",
    userName:"weesewe",
    thumbs:289,
    itemIndex:3,
  }];
  attention(){
    this.navCtrl.push(AttentionPage);
  }

}

@Component({
  templateUrl: 'attention.html'
})
export class AttentionPage {

  constructor(public navCtrl: NavController) {

  }
  hotAbout(){
    this.navCtrl.push(AboutPage);
  }
  attentionContents=[{
    srcImg:"assets/img/aCat.jpg",
    name:'keep',
    time:'15:30',
    contentTitle:'为了参加模仿秀，也是够拼的了，所以，你学会[展背]了吗？',
    thumbs:500,
    discussNum:90,
    discussContent1:'what is this main to show',
    discussContent2:'We can chat in english so we can practice our english level'
  },{
    srcImg:"assets/img/aCat.jpg",
    name:'keep',
    contentTitle:'In order to practice our gesture we should keep practice every day.',
    thumbs:23,
    discussNum:10,
    time:'18:30',
    discussContent1:'what is this main to show',
    discussContent2:'We can chat in english so we can practice our english level'
  }];
}
