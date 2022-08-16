// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Route, Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   login: FormGroup | any;
//   title = 'material-login';
//   loginform: FormGroup;

//   constructor(
//     private router:Router
//   ) {
//     this.loginform = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
//         '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
//       ),]),
//       password: new FormControl('', [Validators.required,Validators.pattern(
//         '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
//       )])
//     });
//    }

//   ngOnInit(): void {
//   }

//   onSubmit(){
//     if(!this.loginform.valid){
//       return;
//     }
//     localStorage.setItem('user',this.loginform.value)
//     this.router.navigate(['/home'])
//   }
// }