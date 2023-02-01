import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthorDetailModalPage } from '../author-detail-modal/author-detail-modal.page';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors: any = [];
  authorsFiltered: any = [];
  swBusqueda : number= 0;
  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.libraryService.getAuthors().then( res => {
      this.authors = res;
      console.log(this.authors)
    })
  }

  async showAuthor(author: any){
    const modal = await this.modalController.create({
      component: AuthorDetailModalPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }

  onCancel(ev:any) { 
    // Reset the field
    ev.target.value = '';
    this.search(ev.target.value)
  }

  search(ev:any) {
    this.authorsFiltered = this.authors.filter( (res:any) => { 
     if (res.name.toLowerCase().indexOf(ev.toLowerCase()) >= 0) return res
    })
   if(ev !== ""){
      this.swBusqueda = 1;
   }else{
    this.swBusqueda = 0;
   }
  }

}
