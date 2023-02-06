import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputOutputComponent } from './components/input-output/input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    // UserCoomponent,
    // ProductComponent,
    // CategoryComponent,
    // BindingComponent,
    // NgIfNgForComponent,
    // NgStyleNgClassAttributesComponent,
    InputOutputComponent
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
