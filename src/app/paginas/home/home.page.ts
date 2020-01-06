import { Component } from '@angular/core';
import {map} from 'rxjs/operators';
import { Http } from '@angular/http';
import { UrlService } from '../../provider/url.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: any;

  constructor(public http: Http, public serviceUrl: UrlService) {

    this.listProdutos();
  }

  listProdutos(){
    this.http.get(this.serviceUrl.getUrl() + "listDados.php").pipe(map(res => res.json()))
    .subscribe(
      listDados => {
        this.produtos = listDados;
      }
    );
  }
}
