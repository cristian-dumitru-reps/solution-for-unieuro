import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareComputersComponent } from './compare-computers.component';

describe('CompareComputersComponent', () => {
  let component: CompareComputersComponent;
  let fixture: ComponentFixture<CompareComputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareComputersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
