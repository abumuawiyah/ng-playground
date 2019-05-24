import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chat-session-content",
  styles: [`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    background:url(https://i.ibb.co/q9mygMq/background.jpg);
     background-repeat: repeat;
    background-size:cover;
  }
  
  
  
  
  
  /* Conversation */
  
  .conversation {
    height: calc(100% - 12px);
    position: relative;
    background: gray;
    z-index: 0;
  }
  
 
  
  .conversation .conversation-container {
    height: calc(100% - 68px);
    box-shadow: inset 0 10px 10px -10px #000000;
    overflow-x: hidden;
    padding: 0 16px;
    margin-bottom: 19px;
  }
  
  .conversation .conversation-container:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Messages */
  
  .message {
    color: #000;
    clear: both;
    line-height: 18px;
    font-size: 15px;
    padding: 8px;
    position: relative;
    margin: 8px 0;
    max-width: 85%;
    word-wrap: break-word;
    z-index: -1;
  }
  
  .message:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
  }
  
  .metadata {
    display: inline-block;
    float: right;
    padding: 0 0 0 7px;
    position: relative;
    bottom: -4px;
  }
  
  .metadata .time {
    color: rgba(0, 0, 0, .45);
    font-size: 11px;
    display: inline-block;
  }
  
  .metadata .tick {
    display: inline-block;
    margin-left: 2px;
    position: relative;
    top: 4px;
    height: 16px;
    width: 16px;
  }
  
  .metadata .tick svg {
    position: absolute;
    transition: .5s ease-in-out;
  }
  
  .metadata .tick svg:first-child {
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: perspective(800px) rotateY(180deg);
            transform: perspective(800px) rotateY(180deg);
  }
  
  .metadata .tick svg:last-child {
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: perspective(800px) rotateY(0deg);
            transform: perspective(800px) rotateY(0deg);
  }
  
  .metadata .tick-animation svg:first-child {
    -webkit-transform: perspective(800px) rotateY(0);
            transform: perspective(800px) rotateY(0);
  }
  
  .metadata .tick-animation svg:last-child {
    -webkit-transform: perspective(800px) rotateY(-179.9deg);
            transform: perspective(800px) rotateY(-179.9deg);
  }
  
  .message:first-child {
    margin: 16px 0 8px;
  }
  
  .message.received {
    background: #fff;
    border-radius: 0px 5px 5px 5px;
    float: left;
  }
  
  .message.received .metadata {
    padding: 0 0 0 16px;
  }
  
  .message.received:after {
    border-width: 0px 10px 10px 0;
    border-color: transparent #fff transparent transparent;
    top: 0;
    left: -10px;
  }
  
  .message.sent {
    background: #e1ffc7;
    border-radius: 5px 0px 5px 5px;
    float: right;
  }
  
  .message.sent:after {
    border-width: 0px 0 10px 10px;
    border-color: transparent transparent transparent #e1ffc7;
    top: 0;
    right: -10px;
  }
  
  
  
  `],
  template: `
  <div class="conversation">
    <div class="conversation-container">
      <div class="message sent">
        What happened last night swaibu?
        <span class="metadata">
            <span class="time"></span><span class="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
        </span>
      </div>
      <div class="message received">
        You were drunk.
        <span class="metadata"><span class="time"></span></span>
      </div>
      <div class="message sent">
        No I wasn't.
        <span class="metadata">
            <span class="time"></span><span class="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
        </span>
      </div>
      <div class="message received">
        <span id="random">You were hugging an old man with a beard screaming "DUMBLEDORE YOU'RE ALIVE!"</span>
        <span class="metadata"><span class="time"></span></span>
      </div>
    </div>
  
  </div>
  `
})
export class ChatSessionContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
