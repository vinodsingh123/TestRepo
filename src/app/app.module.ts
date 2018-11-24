import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmpPipe } from './empcount/emppipe';
import { AppComponent } from './app.component';
import { EmpCount } from './empcount/empcount';
import { FormsModule } from "@angular/forms";
import { DataService } from "./dataservice";

@NgModule({
  declarations: [
    AppComponent,EmpPipe,EmpCount
    ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
