import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HakkimizdaAddComponent } from './hakkimizda-add.component';

describe('HakkimizdaAddComponent', () => {
  let component: HakkimizdaAddComponent;
  let fixture: ComponentFixture<HakkimizdaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HakkimizdaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HakkimizdaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
