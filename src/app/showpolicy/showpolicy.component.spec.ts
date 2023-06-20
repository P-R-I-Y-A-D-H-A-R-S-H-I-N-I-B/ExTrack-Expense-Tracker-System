import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpolicyComponent } from './showpolicy.component';

describe('ShowpolicyComponent', () => {
  let component: ShowpolicyComponent;
  let fixture: ComponentFixture<ShowpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
