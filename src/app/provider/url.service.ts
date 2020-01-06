import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url: string = "https://localhost/catalogo/catalogo/php/";

  constructor(public alert: AlertController) { }

  getUrl(){
    return this.url;
  }

  async alertas(titulo, msg){
    const alert = await this.alert.create({
      header: titulo,
      message : msg,
      buttons: [
        'OK'
      ]

    });
    await alert.present();
  

  }

}
