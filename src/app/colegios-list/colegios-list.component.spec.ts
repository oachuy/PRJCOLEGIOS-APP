import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegiosListComponent } from './colegios-list.component';

describe('ColegiosListComponent', () => {
  let component: ColegiosListComponent;
  let fixture: ComponentFixture<ColegiosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColegiosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColegiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
