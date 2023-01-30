import { Component } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { BooksModalPage } from '../books-modal/books-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authors: any;
  booksOff: any;
  booksOfAuthor: any;

  slideOps = {
    initialSlide: 1,
    slidesPerView: 2,
    centeredSlides: false,
    speed: 400
  }

  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private menu: MenuController
    ) { }

  ionViewDidEnter() {

    this.libraryService.getAuthors().then(res => {
      this.authors = res;
    });

    this.booksOff = this.libraryService.getBooksOffline();
  }

  searchBooks(authorId:number){
    return this.libraryService.getBookByAuthor(authorId);
  }

  async showBooksByAuthor(author: any) {
    this.booksOfAuthor = await this.searchBooks(author.id);
    console.log(this.booksOfAuthor) 
    const modal = await this.modalController.create({
      component: BooksModalPage,
      componentProps: {
        author: author,
        books: this.booksOfAuthor
      }
    })
    return await modal.present();
  }

  goToAuthors(){
    this.navCtrl.navigateForward("/menu/authors");
    this.menu.close();
  }

  goToBooks(){
    this.navCtrl.navigateForward("/menu/books");
    this.menu.close();
  }

  goToMyFavorites(){
    this.navCtrl.navigateForward("/menu/favorite-books");
    this.menu.close();
  }


}
