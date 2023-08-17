import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WackamoleComponent } from './wackamole.component';

describe('WackamoleComponent', () => {
  let component: WackamoleComponent;
  let fixture: ComponentFixture<WackamoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WackamoleComponent]
    });
    fixture = TestBed.createComponent(WackamoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
