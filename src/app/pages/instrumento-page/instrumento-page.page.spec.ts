import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoPagePage } from './instrumento-page.page';

describe('InstrumentoPagePage', () => {
  let component: InstrumentoPagePage;
  let fixture: ComponentFixture<InstrumentoPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentoPagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
