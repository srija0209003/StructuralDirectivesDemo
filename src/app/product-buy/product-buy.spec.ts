import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBuy } from './product-buy';

describe('ProductBuy', () => {
  let component: ProductBuy;
  let fixture: ComponentFixture<ProductBuy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductBuy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBuy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
