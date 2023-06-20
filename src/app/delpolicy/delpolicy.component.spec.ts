import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpolicyComponent } from './delpolicy.component';

describe('DelpolicyComponent', () => {
  let component: DelpolicyComponent;
  let fixture: ComponentFixture<DelpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelpolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
