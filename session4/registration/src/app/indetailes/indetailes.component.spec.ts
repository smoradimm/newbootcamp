import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndetailesComponent } from './indetailes.component';

describe('IndetailesComponent', () => {
  let component: IndetailesComponent;
  let fixture: ComponentFixture<IndetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndetailesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
