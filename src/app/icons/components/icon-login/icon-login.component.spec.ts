import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLoginComponent } from './icon-login.component';

describe('IconLoginComponent', () => {
  let component: IconLoginComponent;
  let fixture: ComponentFixture<IconLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
