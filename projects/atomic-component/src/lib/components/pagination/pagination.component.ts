import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "m-pagination",
  template: `
    <div class="pagination">
      <ChevronUpIcon
        [customStyle]="'transform: rotate(-90deg);'"
      ></ChevronUpIcon>
      <a-button [small]="true">1</a-button>
      <a-button [variant]="'red'" [small]="true">2</a-button>
      <a-button [small]="true">3</a-button>
      <a-button [small]="true">4</a-button>
      <a-button [small]="true">5</a-button>
      <ChevronUpIcon
        [customStyle]="'transform: rotate(90deg);'"
      ></ChevronUpIcon>
    </div>
  `
})
export class PaginationComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() customStyle: string;

  constructor() {}

  ngOnInit() {
    const { customStyle } = this;
    this.className = css`
      ${customStyle}
    `;
  }

  ngAfterContentInit() {}
}
