import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { getStyleSheet, Sheet } from "../../utils/sheet";

const styles: any = {
  button: {
    border: "1px solid #000",
    backgroundColor: "tomato",
    color: "#fff",
    width: "auto",
    fontSize: 14,
    height: 30,
    "&:hover": {
      backgroundColor: "red"
    }
  },
  primary: {
    backgroundColor: "blue"
  },
  secondary: {
    backgroundColor: "yellow",
    color: "#000"
  },
  disabled: {
    pointerEvents: "none",
    backgroundColor: "gray",
    color: "#000"
  }
};

@Component({
  selector: "Button",
  template: `
    {{ label }}
  `
})
export class ButtonComponent implements OnInit {
  @Input() css: object;
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() type: string;
  @HostBinding("class") classes;

  ngOnInit() {
    const sheet: any = getStyleSheet(styles);
    this.classes = `${sheet.classes.button}`;
    const variants = {
      primary: `${this.classes} ${sheet.classes.primary}`,
      secondary: `${this.classes} ${sheet.classes.secondary}`,
      disabled: `${this.classes} ${sheet.classes.disabled}`
    };

    if (this.type) {
      this.classes = variants[this.type];
    }

    if (this.disabled === true) {
      this.classes = variants.disabled;
    }
  }
}
