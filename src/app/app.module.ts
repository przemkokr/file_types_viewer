import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RtfViewerComponent } from './viewers/rtf-viewer/rtf-viewer/rtf-viewer.component';
import { RtfService } from './viewers/rtf-viewer/rtf-viewer/rtf-serv.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RtfViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RtfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
