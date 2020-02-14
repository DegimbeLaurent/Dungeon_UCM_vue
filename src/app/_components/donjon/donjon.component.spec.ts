import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonjonComponent } from './donjon.component';

describe('DonjonComponent', () => {
  let component: DonjonComponent;
  let fixture: ComponentFixture<DonjonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonjonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonjonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
