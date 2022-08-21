import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1thrissurComponent } from './plan1thrissur.component';

describe('Plan1thrissurComponent', () => {
  let component: Plan1thrissurComponent;
  let fixture: ComponentFixture<Plan1thrissurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plan1thrissurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plan1thrissurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
