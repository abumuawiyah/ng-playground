import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "w3c-pagination",
  template: `
    <div class="pagination">
      <ChevronUpIcon
        [customStyle]="'transform: rotate(-90deg);'"
      ></ChevronUpIcon>
      <w3c-button [small]="true">1</w3c-button>
      <w3c-button [variant]="'red'" [small]="true">2</w3c-button>
      <w3c-button [small]="true">3</w3c-button>
      <w3c-button [small]="true">4</w3c-button>
      <w3c-button [small]="true">5</w3c-button>
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
