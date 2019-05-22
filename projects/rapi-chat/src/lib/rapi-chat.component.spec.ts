import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapiChatComponent } from './rapi-chat.component';

describe('RapiChatComponent', () => {
  let component: RapiChatComponent;
  let fixture: ComponentFixture<RapiChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapiChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapiChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
