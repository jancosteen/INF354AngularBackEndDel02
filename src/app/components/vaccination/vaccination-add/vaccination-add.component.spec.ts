import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationAddComponent } from './vaccination-add.component';

describe('VaccinationAddComponent', () => {
  let component: VaccinationAddComponent;
  let fixture: ComponentFixture<VaccinationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
