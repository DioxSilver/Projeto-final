import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTeacherComponent } from './pages-teacher.component';

describe('PagesTeacherComponent', () => {
  let component: PagesTeacherComponent;
  let fixture: ComponentFixture<PagesTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
