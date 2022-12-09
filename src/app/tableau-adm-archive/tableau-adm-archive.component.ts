import { Component, OnInit, NgZone  } from '@angular/core';
/* import list from '../modele/list.json'; */
import { CrudService } from './../service/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tableau-adm-archive',
  templateUrl: './tableau-adm-archive.component.html',
  styleUrls: ['./tableau-adm-archive.component.scss']
})
export class TableauAdmArchiveComponent implements OnInit {
  Utilisateur: any = [];
  pages: number = 1;
  searchText:any;
  updateForm!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    ) {
      this.updateForm = this.formBuilder.group({
        etat: [true]
      });
    }

  ngOnInit(): void {
    this.crudService.GetUtilisateurs().subscribe((res) => {
      console.log(res);
      this.Utilisateur = res;
    });
  }
  restaurer(id: any) {

    console.log(id);

      this.crudService.updateUtilisateur(id, this.updateForm.value).subscribe(
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

