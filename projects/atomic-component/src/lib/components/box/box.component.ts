import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "w3c-box",
  template: `
    <ng-content></ng-content>
  `
})
export class BoxComponent implements OnInit {
  @Input() customStyle: string = "";
  @Input() display: string = "block";
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
    console.log(this);
    const {
      w,
      h,
      display,
      bgColor,
      p,
      pl,
      pr,
      pt,
      pb,
      m,
      ml,
      mr,
      mt,
      mb,
      customStyle
    } = this;

    const styles = css`
      ${display &&
        css`
          display: ${display};
        `}
      ${bgColor &&
        css`
          background-color: ${bgColor};
        `}
      ${w &&
        css`
          width: ${w};
        `}
      ${h &&
        css`
          height: ${h};
        `}
      ${p &&
        css`
          padding: ${p};
        `}
      ${pl &&
        css`
          padding-left: ${pl};
        `}
      ${pr &&
        css`
          padding-right: ${pr};
        `}
      ${pt &&
        css`
          padding-top: ${pt};
        `}
      ${pb &&
        css`
          padding-bottom: ${pb};
        `}
      ${m &&
        css`
          margin: ${m};
        `}
      ${ml &&
        css`
          margin-left: ${ml};
        `}
      ${mr &&
        css`
          margin-right: ${mr};
        `}
      ${mt &&
        css`
          margin-top: ${mt};
        `}
      ${mb &&
        css`
          margin-bottom: ${mb};
        `}
      
    `;
    this.className = css`
      ${styles}${customStyle}
    `;
  }
}
