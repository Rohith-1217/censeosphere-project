import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingpageService } from '../landingpage.service';
import { SearchForReviewService } from '../search-for-review.service';
import { HttpClient } from '@angular/common/http'
import { FormGroup } from '@angular/forms';
import {FormBuilder, Validators, FormControl, NgForm, AbstractControl} from '@angular/forms';
import { UpdateProfile} from '../update-profile'
import { UpdateProfileService } from '../update-profile.service';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  firstFormGroup:FormGroup;


  email="";
  update1=new UpdateProfile();
  hide:true;

  productDetails=[];
  reviews=[];
  constructor(private router:Router,private landingpageservice:LandingpageService,private searchforreview:SearchForReviewService,private http:HttpClient,
    private _formBuilder: FormBuilder,private updates:UpdateProfileService) { }

  ngOnInit() {

    this.landingpageservice.getAllProducts().subscribe((data:any) => {
      console.log(data);
      this.productDetails=data;
    })

    this.searchforreview.getAllReviews().subscribe((data:any) =>{
      console.log(data);
      this.reviews=data;
    })

    this.firstFormGroup = this._formBuilder.group({
      fileName: ['', Validators.required],
      NameCtrl: ['', Validators.required],
      ReConfirmPasswordCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
   });

  }

  updateDetails()
  {
    this.email=this.firstFormGroup.controls.emailCtrl.value;
    this.update1.name=this.firstFormGroup.controls.NameCtrl.value;
    this.update1.image=this.firstFormGroup.controls.fileName.value;
    this.update1.reconfirmPassword=this.firstFormGroup.controls.ReConfirmPasswordCtrl.value;
    console.log(this.update1);
    this.updates.updateDetails(this.update1,this.email).
      subscribe(data =>{
        console.log("successfully updated");
      });
  }



  update()
  {
   this.router.navigateByUrl("/rprofile"); 
  }
  lpage()
  {
   this.router.navigateByUrl("/returnlanding"); 
  }
  
  // account()
  // {
  //   this.router.navigateByUrl("./reviewerdashboard");
  // }
}
