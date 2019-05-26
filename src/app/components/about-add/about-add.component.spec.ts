import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAddComponent } from './about-add.component';

describe('AboutAddComponent', () => {
  let component: AboutAddComponent;
  let fixture: ComponentFixture<AboutAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
