import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})
export class PageConnexionComponent {
  angForm!: FormGroup;
  submitted = false;
 
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required/* , Validators.minLength(6) */]]
    
    });
  }


  
  /* constructor(private formBuilder :FormBuilder) {} */
  ngOnInit(){
    //validation
    this.submitted = true;

        // stop here if form is invalid
        if (this.angForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.angForm.value))
    }
   
  }


