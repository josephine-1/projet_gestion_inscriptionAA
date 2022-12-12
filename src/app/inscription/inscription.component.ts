import { Component , OnInit, NgZone } from '@angular/core';
/* import { inscription } from '../model/inscription'; */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
  registerForm!: FormGroup;
  submitted = false;
  reussi: string ='';
  date: Date = new Date()
  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private crudService: CrudService,

    ) {

this.registerForm = this.formBuilder.group({

  nom: [''],
  prenom: [''],
  role: [''],
  email: [''],
  password: [''],
  matricule: [''],
  etat: [true],
  date_d_inscription: ['']

});
      }


  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          role: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          matricule: [(new Date()).getTime()], //(new Date()).getTime(); générer matricule automatique
          date_d_inscription:[Date()],
          etat: [true],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(): any {
      this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
          return;
      }
      this.crudService.AddUtilisateur(this.registerForm.value).subscribe(
        (res) => {
          console.log('Data added successfully!');
          console.log(res);
           this.ngZone.run(() => this.router.navigateByUrl('/inscription'));
           this.reussi = 'inscription reussi';
           this.registerForm.reset();
           this.submitted = false;
        },
       /*  (err) => {
          console.log(err);
        } */
      );


      /* alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))*/
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
