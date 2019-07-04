import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibiling4Component } from './sibiling4.component';

describe('Sibiling4Component', () => {
  let component: Sibiling4Component;
  let fixture: ComponentFixture<Sibiling4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sibiling4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sibiling4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
