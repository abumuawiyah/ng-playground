import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  ContentChild,
  TemplateRef,
  forwardRef
} from "@angular/core";
import { injectGlobal, css } from "emotion";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

const palette = [
  {
    color: "purple",
    code: {
      hex: "rebeccapurple"
    }
  },
  {
    color: "orange",
    code: {
      hex: "tomato"
    }
  },
  {
    color: "red",
    code: {
      hex: " #f44336"
    }
  },
  {
    color: "green",
    code: {
      hex: "#4caf50"
    }
  }
];

export const THEME_PROVIDER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ThemeProviderComponent),
  multi: true
};

@Component({
  selector: "ui-theme-provider",
  template: `
    <ng-container>
      <ng-container *ngTemplateOutlet="template; context: theme"></ng-container>
    </ng-container>
  `,
  providers: [THEME_PROVIDER_VALUE_ACCESSOR]
})
export class ThemeProviderComponent implements OnInit, AfterContentInit {
  @Input() css: object;
  @HostBinding("class") className: string;
  @ContentChild(TemplateRef, { static: false }) template!: TemplateRef<any>;
  theme = {
    palette: palette.reduce((obj, item) => {
      obj[item.color] = item.code.hex;
      return obj;
    }, {})
  };

  constructor() {}

  ngOnInit() {
    injectGlobal`
      * {
        box-sizing: border-box;
        font-family: Arial;
        font-size: 14px;
      }
    `;
  }

  ngAfterContentInit() {
    this.className = css`
      display: block;
    `;
  }
}
