import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { FormsModule } from '@angular/forms';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CamaraComponent } from './camara/camara.component'; 
@NgModule({
  declarations: [AppComponent, ProductosComponent, ListaAlumnosComponent, CamaraComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
