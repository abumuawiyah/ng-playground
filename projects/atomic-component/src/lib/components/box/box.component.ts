import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "ui-box",
  template: `
    <ng-content></ng-content>
  `
})
export class BoxComponent implements OnInit {
  @Input() customStyle: string;
  @Input() display: string;
  @Input() bgColor: string;
  @Input() w: string;
  @Input() h: string;
  @Input() p: string;
  @Input() pl: string;
  @Input() pr: string;
  @Input() pt: string;
  @Input() pb: string;
  @Input() m: string;
  @Input() ml: string;
  @Input() mr: string;
  @Input() mt: string;
  @Input() mb: string;
  @Input() flexDirection: string;
  @Input() alignItems: string;
  @Input() alignContent: string;
  @Input() flexFlow: string;
  @Input() flexWrap: string;
  @Input() justifyContent: string;
  @Input() flex: string;
  @Input() flexBasis: string;
  @HostBinding("class") className;

  constructor() {}

  ngOnInit() {
    const {
      w = "auto",
      h = "auto",
      display = "block",
      flexDirection = "row",
      alignItems = "stretch",
      bgColor = "none",
      p = "0",
      pl = "0",
      pr = "0",
      pt = "0",
      pb = "0",
      m = "0",
      ml = "0",
      mr = "0",
      mt = "0",
      mb = "0",
      customStyle = ""
    } = this;

    const styles = `
      ${display && `display: ${display};`}
      ${flexDirection && `flex-direction: ${flexDirection}`};
      ${alignItems && `align-items: ${alignItems}`};
      ${bgColor && ` background-color: ${bgColor};`}
      ${w && `width: ${w};`}
      ${h && ` height: ${h};`}
      ${p && ` padding: ${p};`}
      ${pl && `padding-left: ${pl};`}
      ${pr && `padding-right: ${pr};`}
      ${pt && `padding-top: ${pt};`}
      ${pb && `padding-bottom: ${pb};`}
      ${m && `margin: ${m};`}
      ${ml && `margin-left: ${ml};`}
      ${mr && `margin-right: ${mr};`}
      ${mt && `margin-top: ${mt};`}
      ${mb && `margin-bottom: ${mb};`}
    `;
    console.log("styles", styles);
    this.className = css`
      ${styles}${customStyle}
    `;
  }
}
