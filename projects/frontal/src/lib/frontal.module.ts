import { NgModule } from "@angular/core";
import { FrontalComponent } from "./frontal.component";
import jss from "jss";
import preset from "jss-preset-default";

// jss.setup(preset());

@NgModule({
  declarations: [FrontalComponent],
  imports: [],
  exports: [FrontalComponent]
})
export class FrontalModule {}
