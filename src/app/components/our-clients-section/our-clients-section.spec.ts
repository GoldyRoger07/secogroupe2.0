import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientsSection } from './our-clients-section';

describe('OurClientsSection', () => {
  let component: OurClientsSection;
  let fixture: ComponentFixture<OurClientsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurClientsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurClientsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
