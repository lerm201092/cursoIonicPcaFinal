import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-top-books',
  templateUrl: './top-books.page.html',
  styleUrls: ['./top-books.page.scss'],
})
export class TopBooksPage implements OnInit {

  top_libros: any; 

  constructor(
    private libraryService: LibraryService,
    private storage: Storage,
    private alertController: AlertController
    ) { }

  async ngOnInit() {
    const user_id = await this.storage.get("user_id");
    this.libraryService.topBooks().subscribe((data:any) =>{
      this.top_libros = data
    },
    (error) => 
      this.presentAlert("Opps", "hubo un error", error)
    )
  }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }

}
