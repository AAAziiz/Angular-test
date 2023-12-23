import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAre2Component } from './who-we-are2.component';

describe('WhoWeAre2Component', () => {
  let component: WhoWeAre2Component;
  let fixture: ComponentFixture<WhoWeAre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAre2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWeAre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
