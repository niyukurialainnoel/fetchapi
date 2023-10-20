import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmusclesComponent } from './listmuscles.component';

describe('ListmusclesComponent', () => {
  let component: ListmusclesComponent;
  let fixture: ComponentFixture<ListmusclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListmusclesComponent]
    });
    fixture = TestBed.createComponent(ListmusclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
