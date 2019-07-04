import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibiling2Component } from './sibiling2.component';

describe('Sibiling2Component', () => {
  let component: Sibiling2Component;
  let fixture: ComponentFixture<Sibiling2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sibiling2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sibiling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
