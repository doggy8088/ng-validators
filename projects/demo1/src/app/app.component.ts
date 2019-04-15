import { Component, OnInit } from '@angular/core';
import { compareEqual } from 'dt-compare-equal-validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      pw: ['', [Validators.required]],
      pw2: ['', [Validators.required, compareEqual('pw')]]
    });
  }
}
