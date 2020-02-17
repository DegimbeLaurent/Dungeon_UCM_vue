import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleCombatComponent } from './salle-combat.component';

describe('SalleCombatComponent', () => {
  let component: SalleCombatComponent;
  let fixture: ComponentFixture<SalleCombatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleCombatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
