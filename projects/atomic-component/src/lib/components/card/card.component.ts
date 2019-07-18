import {
  Component,
  ContentChild,
  AfterContentInit,
  Input,
  HostBinding,
  OnInit
} from "@angular/core";
import { CardContentComponent } from "./card-content.component";

@Component({
  selector: "Card",
  template: `
    <ng-content></ng-content>
  `
})
export class CardComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() css: object;
  @Input() variant: string;
  @Input() role: Array<string>;
  @ContentChild(CardContentComponent) cardContent: CardContentComponent;

  ngOnInit() {
    const { css, ...other } = this;
  }

  ngAfterContentInit() {}
}
