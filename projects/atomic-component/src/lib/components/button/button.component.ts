import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "Button",
  template: `
    <ng-content></ng-content>
  `
})
export class ButtonComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() customStyle: string;
  @Input() variant: string;

  constructor() {}

  ngOnInit() {
    const { customStyle, variant } = this;
    console.log(variant);
    this.className = css`
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      ${variant === "blue" && `background-color: #008CBA;`}
      ${variant === "red" && "background-color: #f44336;"}
      ${variant === "gray" && `background-color: #e7e7e7;`}
      ${variant === "black" && `background-color: #555555;`}
      ${customStyle}
    `;
  }

  ngAfterContentInit() {}
}
