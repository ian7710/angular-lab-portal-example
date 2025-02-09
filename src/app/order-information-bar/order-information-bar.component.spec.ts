import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInformationBarComponent } from './order-information-bar.component';

describe('OrderInformationBarComponent', () => {
  let component: OrderInformationBarComponent;
  let fixture: ComponentFixture<OrderInformationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderInformationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderInformationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
