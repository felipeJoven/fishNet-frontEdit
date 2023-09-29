import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropesComponent } from './registropes.component';

describe('RegistropesComponent', () => {
  let component: RegistropesComponent;
  let fixture: ComponentFixture<RegistropesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistropesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistropesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
