import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRecordsComponent } from './modify-records.component';

describe('ModifyRecordsComponent', () => {
  let component: ModifyRecordsComponent;
  let fixture: ComponentFixture<ModifyRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
