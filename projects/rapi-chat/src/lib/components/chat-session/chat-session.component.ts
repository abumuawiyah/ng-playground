import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chat-session",
  template: `
    <section>
      <chat-session-header></chat-session-header>
    </section>
  `
})
export class ChatSessionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
