import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HakkimizdaUpdateComponent } from './hakkimizda-update.component';

describe('HakkimizdaUpdateComponent', () => {
  let component: HakkimizdaUpdateComponent;
  let fixture: ComponentFixture<HakkimizdaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HakkimizdaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HakkimizdaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
