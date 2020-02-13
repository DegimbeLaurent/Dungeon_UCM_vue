import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuriterComponent } from './securiter.component';

describe('SecuriterComponent', () => {
  let component: SecuriterComponent;
  let fixture: ComponentFixture<SecuriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
