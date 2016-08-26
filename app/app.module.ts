import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { contenedorApp }  from './pages/contenedor/app.componente';






@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ contenedorApp ],
  bootstrap:    [ contenedorApp ]
})


export class AppModule { }
