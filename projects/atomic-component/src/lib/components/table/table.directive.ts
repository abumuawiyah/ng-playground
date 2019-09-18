import {
  Directive,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  ContentChild
} from "@angular/core";
import { css } from "emotion";
import { TBodyDirective } from "./tbody.directive";
import { THeaderDirective } from "./theader.directive";
import { TFooterDirective } from "./tfooter.directive";

@Directive({
  selector: "[m-table]"
})
export class TableDirective implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @ContentChild(TBodyDirective, { static: false })
  tbody!: TBodyDirective;
  @ContentChild(THeaderDirective, { static: false })
  thead!: THeaderDirective;
  @ContentChild(TFooterDirective, { static: false })
  tfoot!: TFooterDirective;
  @Input() customStyle: string;

  ngOnInit() {
    const { customStyle } = this;

    this.className = css`
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #dddddd;
      }
      ${customStyle}
    `;
  }

  test() {
    alert(123);
  }

  ngAfterContentInit() {
    this.tbody.className = css`
      color: rebeccapurple;
    `;
  }
}
