import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  SimpleChanges
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Component({
  selector: "a-button",
  template: `
    <ng-content></ng-content>
  `
})
export class ButtonComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() customStyle: string;
  @Input() variant: string;
  @Input() small: boolean;
  @Input() disable: boolean;
  defaultInputs = new BehaviorSubject<any>({
    small: false,
    disable: false,
    variant: "green"
  });

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const inputs = Object.keys(changes).reduce(function(result, item) {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      ${inputs.variant === "red" &&
        css`
          background-color: orange;
          border: 4px solid red;
        `}

      ${inputs.variant === "green" &&
        css`
          background-color: green;
          border: 4px solid tomato;
        `}

      ${inputs.small &&
        css`
          padding: 5px 10px;
        `}

      ${inputs.disable &&
        css`
          cursor: not-allowed;
          pointer-events: none;
          opacity: 0.3;
        `}
    `;
  }

  ngOnInit() {
    const { customStyle, ...others } = this;
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...others });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngAfterContentInit() {}
}
