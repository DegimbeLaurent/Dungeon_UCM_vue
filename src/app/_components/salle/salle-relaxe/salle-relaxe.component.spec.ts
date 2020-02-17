import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleRelaxeComponent } from './salle-relaxe.component';

describe('SalleRelaxeComponent', () => {
  let component: SalleRelaxeComponent;
  let fixture: ComponentFixture<SalleRelaxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleRelaxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleRelaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
