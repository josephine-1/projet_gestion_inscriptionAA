import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { __values } from 'tslib';
import { Router } from  '@angular/router';
import { Utilisateur } from  '../service/Utilisateur';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})
export class PageConnexionComponent implements OnInit {
  angForm!: FormGroup;
submitted = false;
constructor(private authService: AuthService,
  private router: Router, private formBuilder: FormBuilder ) { }
  ngOnInit() {
    this.angForm  =  this.formBuilder.group({
        email: /* ['', Validators.required] */['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', Validators.required]
    });
  }

  get formControls() { return this.angForm.controls; }
  seConnecter(){
    console.log(this.angForm.value);
    this.submitted = true;
    if(this.angForm.invalid){
      return;
    }
    this.authService.seConnecter(this.angForm.value);
    this.router.navigateByUrl('/active');
  }


 /*  donnee: {email: string, password: string} = {email: '', password: ''}

  constructor(private fb: FormBuilder) {
    this.createForm();

  } */
 /*  createForm() {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required , Validators.minLength(6) ]]

    });
  } */

  /* constructor(private formBuilder :FormBuilder) {} */
  /* ngOnInit(){ */
    //validation
   /*  this.submitted = true;
 */
        // stop here if form is invalid
       /*  if (this.angForm.invalid) {
          console.log('erreur')
            return;
        }


        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.angForm.value)) */
    }

 /*  } */


