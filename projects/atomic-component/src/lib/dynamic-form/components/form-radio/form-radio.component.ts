import {
  Component,
  ViewContainerRef,
  OnInit,
  HostBinding
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from "../../models/field.interface";
import { FieldConfig } from "../../models/field-config.interface";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "app-form-radio",
  templateUrl: "./form-radio.component.html",
  styleUrls: ["./form-radio.component.scss"]
})
export class FormRadioComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;

  @HostBinding("class")
  classes;
  ngOnInit() {
    this.classes = this.config.classNames;
  }
}
