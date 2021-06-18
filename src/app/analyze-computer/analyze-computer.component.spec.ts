import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeComputerComponent } from './analyze-computer.component';

describe('AnalyzeComputerComponent', () => {
  let component: AnalyzeComputerComponent;
  let fixture: ComponentFixture<AnalyzeComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzeComputerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
