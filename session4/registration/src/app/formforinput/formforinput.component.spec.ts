import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormforinputComponent } from './FormforinputComponent';

describe('FormforinputComponent', () => {
  let component: FormforinputComponent;
  let fixture: ComponentFixture<FormforinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormforinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormforinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
