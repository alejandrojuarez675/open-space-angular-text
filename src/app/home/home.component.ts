import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: String[] = [];

  form = new FormGroup({
    action: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    const value = this.form.get('action')?.value;
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
