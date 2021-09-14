import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentosPagePage } from './instrumentos-page.page';

describe('InstrumentosPagePage', () => {
  let component: InstrumentosPagePage;
  let fixture: ComponentFixture<InstrumentosPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentosPagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentosPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
