import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBubbleReceivedComponent } from './chat-bubble-received.component';

describe('ChatBubbleReceivedComponent', () => {
  let component: ChatBubbleReceivedComponent;
  let fixture: ComponentFixture<ChatBubbleReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBubbleReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBubbleReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
