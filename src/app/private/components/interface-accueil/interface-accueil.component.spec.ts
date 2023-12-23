import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAccueilComponent } from './interface-accueil.component';

describe('InterfaceAccueilComponent', () => {
  let component: InterfaceAccueilComponent;
  let fixture: ComponentFixture<InterfaceAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
