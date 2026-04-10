import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsOutComponent } from './who-is-out.component';

describe('WhoIsOutComponent', () => {
  let component: WhoIsOutComponent;
  let fixture: ComponentFixture<WhoIsOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoIsOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoIsOutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
