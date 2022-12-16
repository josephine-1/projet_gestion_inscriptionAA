import { Component , OnInit, NgZone } from '@angular/core';
/* import { inscription } from '../model/inscription'; */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/service.service';
import * as bcrypt from 'bcryptjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
  registerForm!: FormGroup;
  submitted = false;
  verifPass: any = true;
  reussi: string ='';
  Utilisateur:any;
  mail!:String;
  mailExiste:String = '';
  preview!: string;
  select_tof:boolean = false;
  percentDone?: any = 0;
  users: any[] = [];


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
  password2: [''],
  matricule: [''],
  etat: [true],
  date_d_inscription: [''],
  avatar: ['avatar.jpg'],

});
      }


  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          role: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          password2: ['', [Validators.required, Validators.minLength(6)]],
          matricule: [(new Date()).getTime()], //(new Date()).getTime(); générer matricule automatique
          date_d_inscription:[Date()],
          etat: [true],
          avatar: ['avatar.jpg'],

      });
  }

  uploadFile(event) {
    this.select_tof = true;
    const file = (event.target as HTMLInputElement).files[0];
    this.registerForm.patchValue({
      avatar: file,
    });
    this.registerForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  checkPassword =()=>
  {  let pass1 = (<HTMLInputElement>document.getElementById("pass1")).value;
     let pass2 = (<HTMLInputElement>document.getElementById("pass2")).value;
         console.log(pass1 != pass2)
          if( pass1 != pass2)
              {        this.verifPass = false;
              console.log(this.verifPass)
               this.registerForm = this.formBuilder.group(
             {          password:[''],
                    password2:[''],
             })
                      setTimeout(()=>{ this.verifPass = true}, 3000);
                        }
                        this.mailExiste = '';
             }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  submitForm() : any {
      this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
          this.reussi = '';
          return;
      }
let date = (new Date()).getTime();
let matricule = date.toString();
const salt = bcrypt.genSaltSync(10);
const user={

  prenom: this.registerForm.value.prenom,
  nom:this.registerForm.value.nom,
  email: this.registerForm.value.email,
  password:bcrypt.hashSync(this.registerForm.value.password, salt),
  role:this.registerForm.value.role,
  matricule:matricule,
  etat:true,
  date_d_inscription:new Date(),
  avatar:'null',
}
/* console.log(user) */


this.crudService.GetUtilisateurs().subscribe((res) => {
  this.mail = this.registerForm.value.email;
  res = res.filter((user:any) => user.email == this.mail); // filtrer les actives et les archives
  this.Utilisateur = res;
  console.log(this.Utilisateur.length);



  if ((this.Utilisateur.length) == 0) {
        if (this.select_tof == false) {
               this.crudService.AddUtilisateur(user).subscribe(
          (res) => {

            console.log('Data added successfully!');
            console.log(res);
            this.ngZone.run(() => this.router.navigateByUrl('/inscription'));
            this.reussi = 'inscription reussi';
            this.registerForm.reset();
            this.submitted = false;
            setInterval(() => { this.reussi = ''}, 3000);
          });
        }
        if (this.select_tof == true) {

    this.crudService

    .addUser(user.prenom, user.nom, user.email, user.password,
      user.role, user.matricule, user.etat, user.date_d_inscription, this.registerForm.value.avatar)
    .subscribe((event: HttpEvent<any>) => { console.log(this.registerForm.value.avatar);

      switch (event.type) {
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          /*  this.percentDone = false; */
          this.ngZone.run(() => this.router.navigateByUrl('/inscription'));
          this.reussi = 'inscription reussi';
          this.registerForm.reset();
          this.submitted = false;
          setInterval(() => { this.reussi = ''}, 3000);
      }
    });
        }




  }
  else{
    this.mailExiste = "L'adresse mail existe déja";
    setInterval(() => { this.mailExiste = ''}, 3000);
  }

})







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
