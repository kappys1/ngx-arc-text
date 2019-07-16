import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgxArcTextModule } from './../../projects/ngx-arc-text/src/public_api'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgxArcTextModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
