import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from "../../models/field.interface";
import { FieldConfig } from "../../models/field-config.interface";
import { getStyleSheet } from "../../../utils/sheet";

const styles: any = {
  formSelect: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "& label": {
      fontWeight: "bold",
      flex: "0 0 30%"
    },
    "& select": {
      border: "1px solid grey",
      flex: "0 0 70%",
      height: 39,
      fontSize: 14,
      boxSizing: "border-box",
      borderRadius: 0
    }
  }
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: "form-select",
  // template: `
  //   <div [class]="classes.formSelect" [formGroup]="group">
  //     <label>{{ config.label }}</label>
  //     <select [formControlName]="config.name">
  //       <option value="">{{ config.placeholder }}</option>
  //       <option *ngFor="let option of config.options"> {{ option }} </option>
  //     </select>
  //   </div>
  // `
  template: `
    <div [class]="classes.formSelect" [formGroup]="group">
      <label>{{ config.label }}</label>
      <Dropdown></Dropdown>
    </div>
  `
})
export class FormSelectComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;
  public classes: any;

  ngOnInit() {
    const sheet = getStyleSheet(styles);
    this.classes = sheet.classes;
  }
}
