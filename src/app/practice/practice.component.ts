import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
  host: {
    '[class.card]': `true`,
    '[class.text-center]': `true`,
  },
  styles: [
    `
      :host ::ng-deep .custom-style {
        font-size: 108px;       
      }
    `,
  ],
})
export class PracticeComponent implements OnInit {

  pranayamaForm

  //times
  timeInExNum = 0;

  actionsCatalog: any = ['Inhala', 'Retención', 'Exhala'];
  repeatsCatalog: any = ['4', '6', '8', '10'];
  timeInExCatalog: any = ['4', '6', '8', '10'];
  timeRetentionCatalog: any = ['4', '6', '8', '10'];

  config: CountdownConfig = {
    leftTime: 60,
    format: 'HH:mm:ss',
    prettyText: (text) => {
      return text
        .split(':')
        .map((v) => `<span class="item">${v}</span>`)
        .join('');
    },
  };

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
    const {repeats} = this.pranayamaForm.value;
    this.timeInExNum = repeats;
    console.warn(this.pranayamaForm.value);
  }

  handleEvent(e: CountdownEvent) {
    console.log('Actions', e);
  }

}

