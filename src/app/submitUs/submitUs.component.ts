import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-submitUs',
  templateUrl: './submitUs.component.html',
  styleUrls: ['./submitUs.component.css']
})
export class SubmitUsComponent implements OnInit {

  submitus: FormGroup;

  constructor(private fb: FormBuilder) { }
  len: number;
  category = 'mt';
  categoryLengthValidation = Validators.maxLength(180);

  onChange() {
    console.log(this.category);

    if (this.category === 'ref') {
      this.len = 280;
      this.categoryLengthValidation = Validators.maxLength(this.len);
    } else if ($('#storyCategory').val() === 'nf') {
      this.categoryLengthValidation = Validators.maxLength(this.len);
      this.len = 60;
    }
}

  ngOnInit() {

    // let categoryLengthValidation = Validators.maxLength(180);
    this.len = 180;
    


    this.submitus = this.fb.group({
      fName: ['', [Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      lName: ['', [Validators.minLength(2), Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      instaId: [''],
      category: ['mt'],
      story: ['', [this.categoryLengthValidation]]
    });
  }

}
