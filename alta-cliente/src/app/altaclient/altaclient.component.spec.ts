import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaclientComponent } from './altaclient.component';

describe('AltaclientComponent', () => {
  let component: AltaclientComponent;
  let fixture: ComponentFixture<AltaclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
