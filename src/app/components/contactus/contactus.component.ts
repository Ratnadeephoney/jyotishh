import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit{
  contactusForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.contactusForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      help: ['', [Validators.required , Validators.maxLength(120)]],
    });
  }
  
  onSubmit() {
    if (this.contactusForm.valid) {
      console.log('Form submitted:', this.contactusForm.value);
      // Implement your login logic here
    } else {
      console.log('Invalid form');
    }
  }

}
