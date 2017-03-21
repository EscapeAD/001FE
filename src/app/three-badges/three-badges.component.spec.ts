import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBadgesComponent } from './three-badges.component';

describe('ThreeBadgesComponent', () => {
  let component: ThreeBadgesComponent;
  let fixture: ComponentFixture<ThreeBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
