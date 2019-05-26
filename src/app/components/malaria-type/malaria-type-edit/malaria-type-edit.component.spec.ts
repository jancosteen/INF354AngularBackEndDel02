import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariaTypeEditComponent } from './malaria-type-edit.component';

describe('MalariaTypeEditComponent', () => {
  let component: MalariaTypeEditComponent;
  let fixture: ComponentFixture<MalariaTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariaTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariaTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
