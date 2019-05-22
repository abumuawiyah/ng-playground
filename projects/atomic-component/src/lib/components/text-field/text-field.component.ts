import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { getStyleSheet, Sheet } from "../../utils/sheet";

const styles: any = {
  textField: {
    border: "1px solid #000",
    color: "#000",
    width: "100%",
    textIndent: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    boxSizing: "border-box"
  },
  disabled: {
    pointerEvents: "none",
    border: "1px solid gray",
    color: "gray"
  },
  error: {
    border: "1px solid red",
    color: "red"
  }
};

@Component({
  selector: "TextField",
  template: `
    <input
      [class]="classes"
      [placeholder]="placeholder || ''"
      [value]="value"
      type="text"
    />
  `
})
export class TextFieldComponent implements OnInit {
  @Input() css: object;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() error: boolean;
  @Input() disabled: boolean;
  @Input() value: string;
  public classes: string;

  ngOnInit() {
    const sheet: any = getStyleSheet(styles);
    this.classes = `${sheet.classes.textField}`;

    if (this.disabled) {
      this.classes = `${this.classes} ${sheet.classes.disabled}`;
    }

    if (this.error) {
      this.classes = `${this.classes} ${sheet.classes.error}`;
    }
  }
}
