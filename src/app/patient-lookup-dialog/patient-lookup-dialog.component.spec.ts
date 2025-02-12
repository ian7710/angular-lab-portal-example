import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLookupDialogComponent } from './patient-lookup-dialog.component';

describe('PatientLookupDialogComponent', () => {
  let component: PatientLookupDialogComponent;
  let fixture: ComponentFixture<PatientLookupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientLookupDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientLookupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
