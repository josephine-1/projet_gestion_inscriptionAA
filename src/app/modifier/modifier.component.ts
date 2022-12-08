import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/service.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss'],
})
export class ModifierComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;
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

  ngOnInit() {}

  onUpdate(): any {
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
