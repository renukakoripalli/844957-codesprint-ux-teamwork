import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderpageComponent } from './vieworderpage.component';

describe('VieworderpageComponent', () => {
  let component: VieworderpageComponent;
  let fixture: ComponentFixture<VieworderpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
