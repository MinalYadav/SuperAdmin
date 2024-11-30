import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallEmpProfileComponent } from './call-emp-profile.component';

describe('CallEmpProfileComponent', () => {
  let component: CallEmpProfileComponent;
  let fixture: ComponentFixture<CallEmpProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallEmpProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallEmpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
