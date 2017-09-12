import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarracksComponent } from './barracks.component';

describe('BarracksComponent', () => {
  let component: BarracksComponent;
  let fixture: ComponentFixture<BarracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
