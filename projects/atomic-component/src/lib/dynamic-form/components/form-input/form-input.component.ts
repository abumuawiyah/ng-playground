import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "../../models/field.interface";
import { FieldConfig } from "../../models/field-config.interface";
import { getStyleSheet } from "../../../utils/sheet";

const styles: {} = {
  formInput: {
    "& label": {
      flex: "0 0 30%"
    }
  },
  textField: {
    flex: "0 0 70%"
  }
};

@Component({
  selector: "form-input",
  template: `
    <Box
      [formGroup]="group"
      [css]="{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        '& label': {
          flex: '0 0 30%'
        }
      }"
    >
      <label>{{ config.label }}</label>
      <TextField
        [class]="classes.textField"
        [disabled]="false"
        [error]="false"
        [value]="'Testing val'"
        [placeholder]="'Testing'"
      ></TextField>
    </Box>
  `
})
export class FormInputComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;
  public classes: {};

  ngOnInit() {
    const sheet = getStyleSheet(styles);
    this.classes = sheet.classes;
  }
}
