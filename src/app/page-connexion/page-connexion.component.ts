import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})
export class PageConnexionComponent {
  angForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
       email: ['', Validators.required],
       password:['', Validators.required]
    });
  }

  /* constructor(private formBuilder :FormBuilder) {} */
  ngOnInit(){
    //validation
   
  }
}

