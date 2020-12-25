import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpersonnesComponent } from './listpersonnes.component';

describe('ListpersonnesComponent', () => {
  let component: ListpersonnesComponent;
  let fixture: ComponentFixture<ListpersonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpersonnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
