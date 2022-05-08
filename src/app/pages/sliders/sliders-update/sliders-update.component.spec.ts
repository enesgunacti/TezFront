import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersUpdateComponent } from './sliders-update.component';

describe('SlidersUpdateComponent', () => {
  let component: SlidersUpdateComponent;
  let fixture: ComponentFixture<SlidersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidersUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
