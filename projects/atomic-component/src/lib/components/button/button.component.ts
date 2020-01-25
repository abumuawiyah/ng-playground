import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  SimpleChanges,
  ɵNG_COMP_DEF as NG_COMP_DEF,
  ɵNG_DIR_DEF as NG_DIR_DEF,
  ɵNG_MOD_DEF as NG_MOD_DEF,
  ɵNG_PIPE_DEF as NG_PIPE_DEF,
  Type,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { palette } from "../../theme";

console.log("testing!!!", NG_COMP_DEF);

@withStyles({
  border: "2px solid red",
  color: "orange",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer"
})
@Component({
  selector: "app-test1",
  template: `
    <div class="{{ this.className }}">
      <b [style.color]="theme?.palette?.red"
        >My display color is {{ theme?.palette?.red }}</b
      >
    </div>
  `,
  styles: []
})
export class AppTest1Component {}

@Component({
  selector: "a-button",
  template: `
    <div>
      <ng-container #container1></ng-container>
      <ng-content></ng-content>
    </div>
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
    variant: "primary"
  });
  @ViewChild("container1", { read: ViewContainerRef })
  container1: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
    import("./button.component").then(({ AppTest1Component }) => {
      this.container1.createComponent(
        this.cfr.resolveComponentFactory(AppTest1Component)
      );
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const inputs = Object.keys(changes).reduce(function(result, item) {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = this.getDynamicStyle(this.defaultInputs.getValue());
  }

  getDynamicStyle(inputs) {
    return css([
      {
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        backgroundColor: palette[inputs.variant]
      },
      inputs.small && { padding: "5px 10px" },
      inputs.disable && {
        cursor: "not-allowed",
        pointerEvents: "none",
        opacity: 0.3
      }
    ]);
  }

  ngOnInit() {
    const { customStyle, ...others } = this;
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...others });
    this.className = this.getDynamicStyle(this.defaultInputs.getValue());
    console.log("on init");
  }

  ngAfterContentInit() {
    console.log("after content init");
  }
}

function isIvyComponent(componentType: Type<any>): boolean {
  return (componentType as any)[NG_COMP_DEF] !== undefined;
}

export function withStyles(customStyles) {
  return cmpType => {
    console.log("is ivy comp", isIvyComponent(cmpType));

    // const originalFactory = cmpType.ɵfac;
    // cmpType.ɵcmp.factory = (...args: any) => {
    //   const cmp: any = originalFactory(...args);
    //   const styles = css([{ ...customStyles }]);
    //   cmp.className = styles;

    //   return cmp;
    // };
    // return cmpType;
  };
}
