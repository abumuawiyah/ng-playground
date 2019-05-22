import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSessionHeaderComponent } from './chat-session-header.component';

describe('ChatSessionHeaderComponent', () => {
  let component: ChatSessionHeaderComponent;
  let fixture: ComponentFixture<ChatSessionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSessionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSessionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
