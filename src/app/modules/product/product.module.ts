import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

@NgModule({
  declarations: [AddProductComponent, EditProductComponent, ListProductComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
