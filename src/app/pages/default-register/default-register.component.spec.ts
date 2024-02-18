import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRegisterComponent } from './default-register.component';

describe('DefaultRegisterComponent', () => {
  let component: DefaultRegisterComponent;
  let fixture: ComponentFixture<DefaultRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultRegisterComponent]
    });
    fixture = TestBed.createComponent(DefaultRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
