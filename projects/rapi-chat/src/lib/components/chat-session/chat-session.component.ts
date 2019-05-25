import {
  Component,
  OnInit,
  HostBinding,
  AfterContentInit
} from "@angular/core";
import { getStyleSheet, Sheet } from "../../utils/sheet";

const styles = {
  session: {
    background: "gray"
  }
};

@Component({
  selector: "chat-session",
  template: `
    <section>
      <chat-session-header></chat-session-header>
      <chat-session-content></chat-session-content>
    </section>
  `
})
export class ChatSessionComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  public sheet: Sheet;

  constructor() {}

  ngOnInit() {
    this.sheet = getStyleSheet(styles);
  }

  ngAfterContentInit() {
    this.className = this.sheet.classes.session;
  }
}
