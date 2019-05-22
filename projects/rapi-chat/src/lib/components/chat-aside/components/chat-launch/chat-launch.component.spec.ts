import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLaunchComponent } from './chat-launch.component';

describe('ChatLaunchComponent', () => {
  let component: ChatLaunchComponent;
  let fixture: ComponentFixture<ChatLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
