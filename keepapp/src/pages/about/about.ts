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

}
