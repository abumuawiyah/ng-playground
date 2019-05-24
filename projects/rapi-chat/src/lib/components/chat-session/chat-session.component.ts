import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chat-session",
  template: `
    <section>
      <chat-session-header></chat-session-header>
      <chat-session-content></chat-session-content>
    </section>
  `
})
export class ChatSessionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
