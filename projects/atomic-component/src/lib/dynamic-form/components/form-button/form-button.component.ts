import { Component, HostBinding, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from "../../models/field.interface";
import { FieldConfig } from "../../models/field-config.interface";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "form-button",
  styleUrls: ["form-button.component.scss"],
  template: `
    <div
      class="dynamic-field form-button"
      [formGroup]="group"
      [ngSwitch]="config.type"
    >
      <button
        *ngSwitchCase="'button'"
        [disabled]="config.disabled"
        (click)="onClick($event, config)"
      >
        {{ config.label }}
      </button>
      <button
        *ngSwitchCase="'submit'"
        [disabled]="config.disabled"
        type="submit"
      >
        {{ config.label }}
      </button>
    </div>
  `
})
export class FormButtonComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;

  @HostBinding("class")
  classes;
  ngOnInit() {
    this.classes = this.config.classNames;
  }

  onClick(e, config) {
    e.preventDefault();
    this.config.action(e);
  }
}
