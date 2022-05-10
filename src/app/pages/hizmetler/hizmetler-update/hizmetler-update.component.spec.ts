import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetlerUpdateComponent } from './hizmetler-update.component';

describe('HizmetlerUpdateComponent', () => {
  let component: HizmetlerUpdateComponent;
  let fixture: ComponentFixture<HizmetlerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HizmetlerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HizmetlerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
