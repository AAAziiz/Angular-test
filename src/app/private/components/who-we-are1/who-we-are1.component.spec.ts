import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAre1Component } from './who-we-are1.component';

describe('WhoWeAre1Component', () => {
  let component: WhoWeAre1Component;
  let fixture: ComponentFixture<WhoWeAre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAre1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWeAre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
