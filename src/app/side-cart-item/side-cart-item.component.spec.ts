import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCartItemComponent } from './side-cart-item.component';

describe('SideCartItemComponent', () => {
  let component: SideCartItemComponent;
  let fixture: ComponentFixture<SideCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
