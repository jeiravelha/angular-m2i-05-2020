import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconClientsComponent } from './icon-clients.component';

describe('IconClientsComponent', () => {
  let component: IconClientsComponent;
  let fixture: ComponentFixture<IconClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
