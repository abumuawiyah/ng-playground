import { Component, OnInit } from "@angular/core";
import { css } from "emotion";

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
  selector: "lib-brick",
  template: `
    <div class="{{ this.className }}">
      <b [style.color]="theme?.palette?.red"
        >My display color is {{ theme?.palette?.red }}</b
      >
    </div>
  `,
  styles: []
})
export class BrickComponent {}

export function withStyles(customStyles) {
  return cmpType => {
    console.log("is ivy comp", cmpType.ɵcmp);

    const originalFactory = cmpType.ɵfac;
    cmpType.ɵcmp.factory = (...args: any) => {
      const cmp: any = originalFactory(...args);
      const styles = css([{ ...customStyles }]);
      cmp.className = styles;

      return cmp;
    };
    return cmpType;
  };
}
