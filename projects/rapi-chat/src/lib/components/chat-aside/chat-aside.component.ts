import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { getStyleSheet, Sheet } from "../../utils/sheet";

const styles: any = {
  aside: {}
};

@Component({
  selector: "chat-aside",
  template: `
    <aside>
      <chat-selection></chat-selection>
      <chat-search></chat-search>
      <section>
        <chat-contact></chat-contact>
        <chat-contact></chat-contact>
        <chat-contact></chat-contact>
        <chat-contact></chat-contact>
        <chat-contact></chat-contact>
      </section>
      <chat-launch></chat-launch>
    </aside>
  `
})
export class ChatAsideComponent implements OnInit {
  @Input() css: object;
  @HostBinding("class") classes;

  ngOnInit() {
    const sheet: any = getStyleSheet(styles);
    this.classes = `${sheet.classes.aside}`;
  }
}
