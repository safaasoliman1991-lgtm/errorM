import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Patientservices } from './patientservices';

describe('Patientservices', () => {
  let component: Patientservices;
  let fixture: ComponentFixture<Patientservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patientservices],
    }).compileComponents();

    fixture = TestBed.createComponent(Patientservices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
