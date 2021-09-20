import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  pranayamaForm
  repeatsCatalog: any = ['4', '6', '8', '10'];
  timeInExCatalog: any = ['4', '6', '8', '10'];
  timeRetentionCatalog: any = ['4', '6', '8', '10'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pranayamaForm = this.fb.group({
      repeats: [''],
      timeInEx: [''],
      timeRetention: ['']
    });
  }

  changeRepeat(e) {
    console.log(e);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.pranayamaForm.value);
  }

}

