import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import jss from "jss";
import preset from "jss-preset-default";
import { TextFieldComponent } from "./components/text-field/text-field.component";
import { BoxComponent } from "./components/box/box.component";
import { ButtonComponent } from "./components/button/button.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { ThemeProviderComponent } from "./theme/theme-provider/theme-provider.component";
import { FrontalModule } from "frontal";

jss.setup(preset());

@NgModule({
  declarations: [
    TextFieldComponent,
    BoxComponent,
    ButtonComponent,
    DropdownComponent,
    ThemeProviderComponent
  ],
  imports: [CommonModule, FrontalModule],
  exports: [
    TextFieldComponent,
    BoxComponent,
    ButtonComponent,
    DropdownComponent,
    ThemeProviderComponent
  ]
})
export class AtomicComponentModule {}
