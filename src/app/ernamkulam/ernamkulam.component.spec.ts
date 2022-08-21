import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErnamkulamComponent } from './ernamkulam.component';

describe('ErnamkulamComponent', () => {
  let component: ErnamkulamComponent;
  let fixture: ComponentFixture<ErnamkulamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErnamkulamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErnamkulamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
