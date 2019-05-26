import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationDetailComponent } from './vaccination-detail.component';

describe('VaccinationDetailComponent', () => {
  let component: VaccinationDetailComponent;
  let fixture: ComponentFixture<VaccinationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
