import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogslistComponent } from './logslist.component';

describe('LogslistComponent', () => {
  let component: LogslistComponent;
  let fixture: ComponentFixture<LogslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
