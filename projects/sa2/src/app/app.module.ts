import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { AtomicComponentModule } from "../../../atomic-component/src/projects";
import { FrontalModule } from "projects/frontal/src/public-api";
import { AtomicComponentModule } from "projects/atomic-component/src/projects";

import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomicComponentModule,
    FrontalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
