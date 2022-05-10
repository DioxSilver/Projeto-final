import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesStudentsComponent } from './pages-students.component';

describe('PagesStudentsComponent', () => {
  let component: PagesStudentsComponent;
  let fixture: ComponentFixture<PagesStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
