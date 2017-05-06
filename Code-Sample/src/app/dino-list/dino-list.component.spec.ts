import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoListComponent } from './dino-list.component';

describe('DinoListComponent', () => {
  let component: DinoListComponent;
  let fixture: ComponentFixture<DinoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
