import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariaTypeAddComponent } from './malaria-type-add.component';

describe('MalariaTypeAddComponent', () => {
  let component: MalariaTypeAddComponent;
  let fixture: ComponentFixture<MalariaTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariaTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariaTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
