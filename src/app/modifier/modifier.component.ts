import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss'],
})
export class ModifierComponent implements OnInit {
  getId: any;
  updateForm!: FormGroup;
  submitted = false;
  renvoi:string = '';
  email:any;
  Utilisateur:any;
  mail_C: any;
  ok:boolean;

  etat:any = localStorage.getItem('token');

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {


    this.updateForm = this.formBuilder.group({
      prenom: [''],
      nom: [''],
      email: [''],
    });

    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetUtilisateur(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        prenom: res['prenom'],
        nom: res['nom'],
        email: res['email'],
      });
    });

    }

  ngOnInit() {


  }
/*    verif(){
    this.updateForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

  });
  } */


  get f() { return this.updateForm.controls; }
  bouger(){ this.ok = true }

    onUpdate(): any {
      if ((this.updateForm.value.prenom == '')|| ( this.updateForm.value.nom == ''  || ( this.updateForm.value.email == '' ))) {
        this.renvoi = 'Veuillez renseigner tout les champs'
        return false;
      }

      this.crudService.GetUtilisateurs().subscribe((res) => {
        this.email = this.updateForm.value.email;
        res = res.filter((user:any) => user.email == this.email);
        this.Utilisateur = res;
      });
      if ((this.Utilisateur.length != 0) && (this.ok == true)) {
        this.renvoi = "l'adresse mail existe déja";
        return false;
      }


    this.submitted = true;
    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
  }
    this.crudService.updateUtilisateur(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/active'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
