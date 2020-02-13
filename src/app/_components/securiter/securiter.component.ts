import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SecuriterService } from 'src/app/_services/connection/securiter.service';
import { Router } from '@angular/router';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import {user} from "../../_models/user";

@Component({
  selector: 'app-securiter',
  templateUrl: './securiter.component.html',
  styleUrls: ['./securiter.component.scss']
})
export class SecuriterComponent implements OnInit {

  formGroup: FormGroup;
  formGroupRegister: FormGroup;
  usertemp: user;

  constructor(
    private secService: SecuriterService,
    private router: Router,
    private toast: NbToastrService,
    private dialog: NbDialogService
  ) { }

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      pseudo: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.maxLength(255),
      ])),
      mdp: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.maxLength(255)
      ]))});


      this.formGroupRegister = new FormGroup({
        nom: new FormControl(null, Validators.compose([
          Validators.required,
          Validators.maxLength(255),
        ])),
        mdp: new FormControl(null, Validators.compose([
          Validators.required,
          Validators.maxLength(20)
        ])),
        pseudo: new FormControl(null, Validators.compose([
          Validators.required,
          Validators.maxLength(20)
        ]))});

  }

  login(){
    //envoyer les data a la api

    let json = this.formGroup.value;
    this.secService.login(json).subscribe(
      (token)=>{
        console.log(token);
        localStorage.setItem('TOKEN',token);
        this.router.navigateByUrl('');
        this.goodToast(4)
      },
      (error)=>{
        console.log(error)
        this.badToast(4)
      },
      ()=>{
        console.log("Raté")
      }
    );
  }
  goodToast(duration) {
    this.toast.show(
      'Bienvenu',
      'YOOOOOLOOOO',
      { duration });
  }
  badToast(duration) {
    this.toast.danger(
      'Error lors de la connection',
      'Echec',
    );
  }
  envoie(){
    console.log("coucou.txt")
    let json = this.formGroupRegister.value;
    this.secService.register(json).subscribe(
      ()=>{
       this.goodToast(4)
      }
    );
  }

}
