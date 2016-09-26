import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import { Menu } from '../../models/menu';
import { TextToSpeech } from 'ionic-native';


@Component({
  templateUrl: 'build/pages/menuview/menuview.html'
})
export class MenuView {
  private title;
  private content;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.title = this.navParams.get('menu').title;
    this.content = this.navParams.get('menu').content;
  }

  textToSpeech(){
    console.log("This is good still")
    TextToSpeech.speak({
      text: this.content,
      locale: 'en-GB',
      rate: 1
    })
  }
}
