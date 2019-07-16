import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxArcTextComponent } from './ngx-arc-text.component';

describe('NgxArcTextComponent', () => {
  let component: NgxArcTextComponent;
  let fixture: ComponentFixture<NgxArcTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxArcTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxArcTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
