import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallePiegeComponent } from './salle-piege.component';

describe('SallePiegeComponent', () => {
  let component: SallePiegeComponent;
  let fixture: ComponentFixture<SallePiegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallePiegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallePiegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
