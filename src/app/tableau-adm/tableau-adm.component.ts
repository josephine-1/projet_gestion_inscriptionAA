import { Component, OnInit, NgZone  } from '@angular/core';
/* import list from '../modele/list.json'; */
import { CrudService } from './../service/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation
} from '@costlydeveloper/ngx-awesome-popup';

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
  etat:any = localStorage.getItem('token');

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
    this.getAllUsers();
     // Call the method
   /*   this.confirmBox(); */


  }
  // Créer un pop-pup
              confirmBox(x:any) {
              const confirmBox = new ConfirmBoxInitializer();
              confirmBox.setTitle('Are you sure?');
              confirmBox.setMessage('Confirm to delete user: John Doe!');
              confirmBox.setButtonLabels('YES', 'NO');


              // Choose layout color type
              confirmBox.setConfig({
                  layoutType: DialogLayoutDisplay.WARNING // SUCCESS | INFO | NONE | DANGER | WARNING
              });

              // Simply open the popup and listen which button is clicked
              const subscription = confirmBox.openConfirmBox$().subscribe(resp => {
                  // IConfirmBoxPublicResponse
                  console.log('Clicked button response: ', resp);
                  subscription.unsubscribe();
                  if (resp.success == true) {
                    this.delete(x)
                  }
              });

          }




  getAllUsers() {
    this.crudService.GetUtilisateurs().subscribe((res) => {
      console.log(res);
      res = res.filter((user:any) => user.etat == true); // filtrer les actives et les archives
      this.Utilisateur = res;
    });
  }
  //pour archiver
  delete(id: any) {
    if(confirm("Voulez-vous vraiment supprimer ?")) {
    console.log(this.updateForm.value.etat);
    /* if (window.confirm('Voulez-vous vraiment supprimer ?')) { */
      this.crudService.updateUtilisateur(id, this.updateForm.value).subscribe(
        () => {
          console.log('Data updated successfully!');
          this.success = 'Archivé avec succés';
          setInterval(() => { this.success = ''}, 3000);
          this.getAllUsers();
           this.ngZone.run(() => this.router.navigateByUrl('active'));
        }
      );/* } */
    }}

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



