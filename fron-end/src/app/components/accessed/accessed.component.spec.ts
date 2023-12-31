import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessedComponent } from './accessed.component';

describe('AccessedComponent', () => {
  let component: AccessedComponent;
  let fixture: ComponentFixture<AccessedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessedComponent]
    });
    fixture = TestBed.createComponent(AccessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
