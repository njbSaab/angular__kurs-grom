import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCoomponent } from './user.coomponent';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './category/category.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfNgForComponent } from './components/ng-if-ng-for/ng-if-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCoomponent,
    ProductComponent,
    CategoryComponent,
    BindingComponent,
    NgIfNgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
