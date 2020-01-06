import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProdutosPageRoutingModule } from './list-produtos-routing.module';

import { ListProdutosPage } from './list-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProdutosPageRoutingModule
  ],
  declarations: [ListProdutosPage]
})
export class ListProdutosPageModule {}
