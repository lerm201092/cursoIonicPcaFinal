import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

author: any;
books : any;

  constructor(private navParams: NavParams,
    private modalController : ModalController,
    private navCtrl: NavController ) { }

  ionViewDidEnter(){
    let param = this.navParams;
    this.author = param.get("author");
    this.books = param.get("books");
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
