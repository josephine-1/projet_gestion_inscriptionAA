import { Component , OnInit } from '@angular/core';
/* import { inscription } from '../model/inscription'; */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          role: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

   
  


/* role = ['admin',' user']; 

model = new inscription('', '' , '' , '' ,'', '' );
registerForm!: FormGroup;
submitted = false;

  onsubmit() {this.submitted = true;} 
 
 constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.registerForm = this.formBuilder.group({
    nom:    ['',Validators.required],
    prenom: ['',Validators.required],
    email:  ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]], 
    role:   ['',Validators.required],
   password: ['',Validators.required],
    confirm :['',Validators.required]
  }

  );

} 

get f() { return this.registerForm.controls;}

onSubmit(){
   this.submitted = true;


   if (this.registerForm.invalid) {
    return;
}

alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))*/
