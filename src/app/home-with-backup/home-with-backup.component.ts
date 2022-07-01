import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { timeInterval } from 'rxjs';
// import { BackupService } from '../backup.service';

@Component({
  selector: 'app-home-with-backup',
  templateUrl: './home-with-backup.component.html',
  styleUrls: ['./home-with-backup.component.css']
})
export class HomeWithBackupComponent implements OnInit {

  list: String[] = [];

  form = new FormGroup({
    action: new FormControl('', Validators.required)
  });

  constructor(
    // private backupService: BackupService,
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    const value = this.form.get('action')?.value;
    if (!value) {
      alert(`write a task`)
      return;
    }
    if (!this.list.includes(value)) {
      this.list.push(value);
    } else {
      alert(`"${value}" is already in the list`)
    }
    this.form.get('action')?.setValue('');
  }

  onDelete(i: number) {
    this.list = this.list.filter((_value, index, _arr) => index !== i);
  }
}
