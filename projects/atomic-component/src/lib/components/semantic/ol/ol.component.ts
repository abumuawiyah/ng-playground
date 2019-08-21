import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { css } from "emotion";
import { BoxComponent } from "../..";

@Component({
  selector: "w3c-ol",
  template: `
    <ng-content></ng-content>
  `
})
export class OlComponent extends BoxComponent implements OnInit {
  @Input() customStyle: string;
  @HostBinding("class") className;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.className = `${this.className} ${css`
      ${this.customStyle}
    `}`;
  }
}
