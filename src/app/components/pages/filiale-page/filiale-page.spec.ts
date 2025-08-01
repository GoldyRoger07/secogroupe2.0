import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialePage } from './filiale-page';

describe('FilialePage', () => {
  let component: FilialePage;
  let fixture: ComponentFixture<FilialePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilialePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilialePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
