import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSessionInputComponent } from './chat-session-input.component';

describe('ChatSessionInputComponent', () => {
  let component: ChatSessionInputComponent;
  let fixture: ComponentFixture<ChatSessionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSessionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSessionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
