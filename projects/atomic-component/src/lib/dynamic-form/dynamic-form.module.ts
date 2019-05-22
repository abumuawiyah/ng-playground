import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./containers/dynamic-form/dynamic-form.component";
import { FormButtonComponent } from "./components/form-button/form-button.component";
import { FormInputComponent } from "./components/form-input/form-input.component";
import { FormSelectComponent } from "./components/form-select/form-select.component";
import { FormCheckboxComponent } from "./components/form-checkbox/form-checkbox.component";
import { FormRadioComponent } from "./components/form-radio/form-radio.component";
import { AtomicComponentModule } from "../atomic-component.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AtomicComponentModule],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    FormRadioComponent
  ],
  exports: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    FormRadioComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    FormRadioComponent
  ]
})
export class DynamicFormModule {}
