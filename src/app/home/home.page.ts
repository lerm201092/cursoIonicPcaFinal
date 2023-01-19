import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  sesion = this.storage.get("isUserLoggedIn")

  constructor(private router: Router, private storage: Storage, 
    private navCtrl: NavController) { 
  }
  goToCerrarSesion(){
    this.storage.set("isUserLoggedIn", true);
    this.navCtrl.navigateForward("/login");
  }
}
