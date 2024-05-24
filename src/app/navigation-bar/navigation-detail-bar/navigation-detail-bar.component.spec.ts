import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDetailBarComponent } from './navigation-detail-bar.component';

describe('NavigationDetailBarComponent', () => {
  let component: NavigationDetailBarComponent;
  let fixture: ComponentFixture<NavigationDetailBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationDetailBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationDetailBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
