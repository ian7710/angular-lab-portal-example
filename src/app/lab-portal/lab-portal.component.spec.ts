import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPortalComponent } from './lab-portal.component';

describe('LabPortalComponent', () => {
  let component: LabPortalComponent;
  let fixture: ComponentFixture<LabPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
