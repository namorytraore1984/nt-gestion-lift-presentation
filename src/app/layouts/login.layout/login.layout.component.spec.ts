import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login.LayoutComponent } from './login.layout.component';

describe('Login.LayoutComponent', () => {
  let component: Login.LayoutComponent;
  let fixture: ComponentFixture<Login.LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login.LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Login.LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
