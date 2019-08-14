import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";
import { css } from "emotion";

@Component({
  selector: "Pagination",
  template: `
    <div class="pagination">
      <ChevronUpIcon
        [customStyle]="'transform: rotate(-90deg);'"
      ></ChevronUpIcon>
      <Button [small]="true">1</Button>
      <Button [variant]="'red'" [small]="true">2</Button>
      <Button [small]="true">3</Button>
      <Button [small]="true">4</Button>
      <Button [small]="true">5</Button>
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
