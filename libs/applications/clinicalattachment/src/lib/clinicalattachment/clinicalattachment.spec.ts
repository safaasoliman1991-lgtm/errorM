import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clinicalattachment } from './clinicalattachment';

describe('Clinicalattachment', () => {
  let component: Clinicalattachment;
  let fixture: ComponentFixture<Clinicalattachment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clinicalattachment],
    }).compileComponents();

    fixture = TestBed.createComponent(Clinicalattachment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
