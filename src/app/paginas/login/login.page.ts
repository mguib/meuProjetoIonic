import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http'

import { from } from 'rxjs';
import { UrlService } from 'src/app/provider/url.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(public alert: AlertController,
    public urlSewrvice: UrlService,
    public http: Http,
    public nav: NavController,
    public loading: LoadingController) { 

        this.email = "mgss.lic17@uea.edu.br";
        this.senha = '1234';

    }



  ngOnInit() {
  }



  async logar() {
    if (this.email == undefined || this.senha == undefined) {
      this.urlSewrvice.alertas('Atenção', 'Preencha todos os campos!');

    } else {

      const load = await this.loading.create({
        spinner: 'circles',
        message: 'Verificando Login...'
      });
      await load.present();

      this.http.get(this.urlSewrvice.getUrl() + "login.php?email=" + this.email + "&senha=" + this.senha).pipe(map(res => res.json()))
        .subscribe(

          data => {

            if (data.msg.logado == "sim") {
              if (data.dados.status == "Ativo") {
                load.dismiss();
                this.nav.navigateBack('home');
              } else {
                this.urlSewrvice.alertas('Atenção!', 'Usuário não está ativo ou esta Bloqueado');
                load.dismiss();
              }

            } else {
              load.dismiss();
              this.urlSewrvice.alertas('Atenção!', 'Os dados de usuário estão incorretos');
            }
          }

        );
    }
  }

}