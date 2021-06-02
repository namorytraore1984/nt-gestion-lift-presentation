import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User.LayoutComponent } from './user.layout.component';

describe('User.LayoutComponent', () => {
  let component: User.LayoutComponent;
  let fixture: ComponentFixture<User.LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User.LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User.LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
