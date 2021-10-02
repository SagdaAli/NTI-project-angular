import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetaileComponent } from './productdetaile.component';

describe('ProductdetaileComponent', () => {
  let component: ProductdetaileComponent;
  let fixture: ComponentFixture<ProductdetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetaileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
