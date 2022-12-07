import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/service.service';



@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit{
  registerForm!: FormGroup
  submitted = false;
  getId: any;
  updateForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private activatedRoute: ActivatedRoute,
              private crudService: CrudService
    ) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');

      this.crudService.GetUtilisateur(this.getId).subscribe((res) => {
        this.updateForm.setValue({
          prenom: res['prenom'],
          nom: res['nom'],
          email: res['email'],
        });
      });

      this.updateForm = this.formBuilder.group({
        prenom: [''],
        nom: [''],
        email: [''],
      });
    }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }
  onUpdate(): any {
    this.crudService.updateUtilisateur(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
