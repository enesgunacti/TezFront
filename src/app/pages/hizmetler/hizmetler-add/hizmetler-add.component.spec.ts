import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetlerAddComponent } from './hizmetler-add.component';

describe('HizmetlerAddComponent', () => {
  let component: HizmetlerAddComponent;
  let fixture: ComponentFixture<HizmetlerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HizmetlerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HizmetlerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
