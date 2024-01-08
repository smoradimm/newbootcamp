import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputbyuserComponent } from './inputbyuser.component';

describe('InputbyuserComponent', () => {
  let component: InputbyuserComponent;
  let fixture: ComponentFixture<InputbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputbyuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
