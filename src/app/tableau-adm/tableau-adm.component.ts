import { Component, OnInit, NgZone  } from '@angular/core';
/* import list from '../modele/list.json'; */
import { CrudService } from './../service/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-tableau-adm',
  templateUrl: './tableau-adm.component.html',
  styleUrls: ['./tableau-adm.component.scss']
})
export class TableauAdmComponent implements OnInit {
  Utilisateur: any = [];
  pages: number = 1;
  searchText:any;
  updateForm!: FormGroup;
  updateForm_s!: FormGroup;
  success: string = ''

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    )
      {
        this.updateForm = this.formBuilder.group({
          etat: [false],
        });
      }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this.crudService.GetUtilisateurs().subscribe((res) => {
      console.log(res);
      res = res.filter((user:any) => user.etat == true);
      this.Utilisateur = res;
    });
  }
  //pour archiver
  delete(id: any) {

    console.log(this.updateForm.value.etat);
    /* if (window.confirm('Voulez-vous vraiment supprimer ?')) { */
      this.crudService.updateUtilisateur(id, this.updateForm.value).subscribe(
        () => {
          console.log('Data updated successfully!');
          this.success = 'Archivé avec succés';
          this.getAllUsers();
           this.ngZone.run(() => this.router.navigateByUrl('active'));
        }
      );
    }
    switcher(id:any){
    this.crudService.GetUtilisateur(id).subscribe((res) => {
    if (res.role == 'utilisateur') {
     /*  this.crudService.updateUtilisateur(id, 'administrateur').subscribe(
        () => {
           this.getAllUsers();
           this.ngZone.run(() => this.router.navigateByUrl('active'));
        }
      ); */console.log(res.role);

    }

                                                           });
                    }
  }



