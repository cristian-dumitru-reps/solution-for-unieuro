import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdChoiceComponent } from './pd-choice.component';

describe('PdChoiceComponent', () => {
  let component: PdChoiceComponent;
  let fixture: ComponentFixture<PdChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
