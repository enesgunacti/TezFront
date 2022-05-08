import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsUpdateComponent } from './documents-update.component';

describe('DocumentsUpdateComponent', () => {
  let component: DocumentsUpdateComponent;
  let fixture: ComponentFixture<DocumentsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
