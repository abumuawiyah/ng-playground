import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBubbleSentComponent } from './chat-bubble-sent.component';

describe('ChatBubbleSentComponent', () => {
  let component: ChatBubbleSentComponent;
  let fixture: ComponentFixture<ChatBubbleSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBubbleSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBubbleSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
