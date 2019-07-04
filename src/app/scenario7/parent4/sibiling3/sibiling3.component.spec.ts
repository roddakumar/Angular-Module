import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibiling3Component } from './sibiling3.component';

describe('Sibiling3Component', () => {
  let component: Sibiling3Component;
  let fixture: ComponentFixture<Sibiling3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sibiling3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sibiling3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
