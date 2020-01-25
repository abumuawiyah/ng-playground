import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrickModule } from "projects/brick/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrickModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
