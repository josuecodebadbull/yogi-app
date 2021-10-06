import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;
  sending: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      phone : [''],
      comments: ['', Validators.required]
    });
  }

  get myForm() {
    return this.contactForm.controls;
  }

  onSubmit(){
    this.sending = true;
    this.contactForm.markAllAsTouched();
    console.log(this.contactForm.value);    
  }

}


