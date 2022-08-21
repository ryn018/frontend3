import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KozhikodeComponent } from './kozhikode.component';

describe('KozhikodeComponent', () => {
  let component: KozhikodeComponent;
  let fixture: ComponentFixture<KozhikodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KozhikodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KozhikodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
