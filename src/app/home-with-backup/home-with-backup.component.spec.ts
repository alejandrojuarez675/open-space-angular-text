import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeWithBackupComponent } from './home-with-backup.component';

describe('HomeWithBackupComponent', () => {
  let component: HomeWithBackupComponent;
  let fixture: ComponentFixture<HomeWithBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [ HomeWithBackupComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWithBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
