import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Alert, AlertType, AlertTitle } from "src/app/dto/Alert";
import { AccountService } from '../shared-module/Services/auth-account/account.service';
import { AuthOTPGeneration, LoginResponse } from '../dto/APIResponseDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    public isLoading: boolean = false;
    loginForm! :FormGroup
    otpForm!: FormGroup
    loading = false;
    submitted = false;
    showOtp=false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
    ) { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required)
        });
        this.otpForm = this.formBuilder.group({
            oneTimePass : ['',Validators.required]
    })
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    get otp() { return this.otpForm.controls; }

    public login() {
        let obj = { 
            userName: this.f['username'].value, 
            authType: 5 
        }
        this.accountService.login(
            obj,
            res => {
                Alert.showStatus(
                AlertType.SUCCESS,
                AlertTitle.SUCCESS,
                'We Send OTP Code to your phone number'
                );
                if(res.success === 'true') {
                    this.showOtp = true;
                } 
                else{
                    this.loading = false;
                    this.submitted = false;
                }
               
            },
            errMessage => {
                Alert.showStatus(
                    AlertType.ERROR,
                    AlertTitle.ERROR,
                    ''
                );
            },
            () => {
                this.isLoading = false;
            }
        )
    }

    public verifyOTP() {

        let obj = { 
            userName: this.f['username'].value, 
            oneTimePass: this.otp['oneTimePass'].value,
            authType: 5
        }
        this.accountService.generateToken(
            obj,
            res => {
                Alert.showStatus(
                    AlertType.SUCCESS,
                    AlertTitle.SUCCESS,
                    'OTP Verified'
                );
                if(res){
                    localStorage.setItem('user', JSON.stringify(res));
                    setTimeout(() => {
                        window.location.href = '/user/dashboard';
                    }, 1000);
                }
                console.log(res);
            },
            errMessage => {
                Alert.showStatus(
                    AlertType.ERROR,
                    AlertTitle.ERROR,
                    'Wrong OTP Number'
                );
            },
            () => {
                this.isLoading = false;
            }
        )
    }

    // onSubmit() {
    //     this.submitted = true;

    //     // reset alerts on submit

    //     // stop here if form is invalid
    //     if (this.loginForm.invalid) {
    //       this.submitted = false
    //         return;
    //     }

    //     this.loading = true;
    //     this.accountService.authUser(this.f['username'].value, 5)
    //     .subscribe({
    //        next:  (loginResponse:LoginResponse)=>{
    //             if(loginResponse.success==='true') {
    //                 this.showOtp=true;
    //             } else{}
    //             this.loading = false;
    //             this.submitted = false;
    //     }, error: error=>{
    //         /**write logic to show error */
    //         this.loading=false;
    //         this.submitted=false;
    //     }
    // })
    // }

    // verify(){
    //     this.submitted = true;
    //     // reset alerts on submit

    //     // stop here if form is invalid
    //     if (this.otpForm.invalid) {
    //       this.submitted=false
    //         return;
    //     }
    //     this.loading = true;
    //     this.accountService.login(this.f['username'].value,this.otp['oneTimePass'].value)
    //     .subscribe({
    //        next: (authOtpResponse:AuthOTPGeneration)=>{
    //             if(authOtpResponse){
    //                 this.router.navigateByUrl('user')
    //             }
    //             console.log(authOtpResponse)
    //     }, error:error=>{
    //         /**write logic to show error */
    //         this.loading=false;
    //         this.submitted=false;
    //     }
    // })
    // }
}



