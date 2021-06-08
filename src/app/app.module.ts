import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DespensaComponent } from './despensa/despensa.component';
import { RefrigeradosComponent } from './refrigerados/refrigerados.component';
import { CanastaComponent } from './canasta/canasta.component';
import { AboutComponent } from './about/about.component';

import { HomepageComponent } from './homepage/homepage.component';
import { ArticlepageComponent } from './articlepage/articlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    DespensaComponent,
    RefrigeradosComponent,
    CanastaComponent,
    AboutComponent,
    HomepageComponent,
    ArticlepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
