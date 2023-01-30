import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private storage: Storage, private navCtrl: NavController) {}

  async canActivate(){
    const login = await this.storage.get("user_id");
    console.log(login)
    if (login){
      this.navCtrl.navigateForward("/menu/home");
      return false;
    }else{
      return true;
    }
    
  }
  
}
