import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationEditComponent } from './vaccination-edit.component';

describe('VaccinationEditComponent', () => {
  let component: VaccinationEditComponent;
  let fixture: ComponentFixture<VaccinationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
