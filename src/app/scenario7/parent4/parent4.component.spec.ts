import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent4Component } from './parent4.component';

describe('Parent4Component', () => {
  let component: Parent4Component;
  let fixture: ComponentFixture<Parent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
