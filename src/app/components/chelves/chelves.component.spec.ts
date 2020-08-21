import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChelvesComponent } from './chelves.component';

describe('ChelvesComponent', () => {
  let component: ChelvesComponent;
  let fixture: ComponentFixture<ChelvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChelvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChelvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
