import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  getId: any;
  updateForm!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {

    this.changeToAdmin();
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetUtilisateur(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        role: res['role'],
      });
      if (res.role == 'administrateur' ) {
        this.changeToUser();
        this.onUpdate();
      } else {
        this.changeToAdmin();
        this.onUpdate();
      }
    });

    }

  ngOnInit() {


  }
changeToAdmin()
{
  this.updateForm = this.formBuilder.group({
    role: ['administrateur'],
  });
}
changeToUser()
{
  this.updateForm = this.formBuilder.group({
    role: ['utilisateur'],
  });
}
  onUpdate(): any {


     this.crudService.updateUtilisateur(this.getId, this.updateForm.value).subscribe(
      () => {

        this.ngZone.run(() => this.router.navigateByUrl('/active'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
