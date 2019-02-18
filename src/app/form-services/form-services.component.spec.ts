import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServicesComponent } from './form-services.component';

describe('FormServicesComponent', () => {
  let component: FormServicesComponent;
  let fixture: ComponentFixture<FormServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
