import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPagePage } from './not-found-page.page';

describe('NotFoundPagePage', () => {
  let component: NotFoundPagePage;
  let fixture: ComponentFixture<NotFoundPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundPagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
