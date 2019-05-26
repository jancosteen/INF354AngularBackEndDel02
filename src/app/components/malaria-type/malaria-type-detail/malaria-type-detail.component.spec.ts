import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariaTypeDetailComponent } from './malaria-type-detail.component';

describe('MalariaTypeDetailComponent', () => {
  let component: MalariaTypeDetailComponent;
  let fixture: ComponentFixture<MalariaTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariaTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariaTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
