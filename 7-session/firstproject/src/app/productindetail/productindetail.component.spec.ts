import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductindetailComponent } from './productindetail.component';

describe('ProductindetailComponent', () => {
  let component: ProductindetailComponent;
  let fixture: ComponentFixture<ProductindetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductindetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductindetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
