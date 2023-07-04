import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdashboartComponent } from './ldashboart.component';

describe('LdashboartComponent', () => {
  let component: LdashboartComponent;
  let fixture: ComponentFixture<LdashboartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LdashboartComponent]
    });
    fixture = TestBed.createComponent(LdashboartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
