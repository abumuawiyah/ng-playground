import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSessionContentComponent } from './chat-session-content.component';

describe('ChatSessionContentComponent', () => {
  let component: ChatSessionContentComponent;
  let fixture: ComponentFixture<ChatSessionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSessionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSessionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
