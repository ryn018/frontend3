import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiruvanthapuramComponent } from './thiruvanthapuram.component';

describe('ThiruvanthapuramComponent', () => {
  let component: ThiruvanthapuramComponent;
  let fixture: ComponentFixture<ThiruvanthapuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThiruvanthapuramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThiruvanthapuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
