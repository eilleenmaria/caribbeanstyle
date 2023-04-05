import {Component, OnInit,Output, EventEmitter} from "@angular/core";
import {AbstractControl,FormControl, Validators,ValidationErrors, ValidatorFn, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    confirmPassword: new FormControl('', Validators.required)
  },
  { validators: confirmPasswordValidator});

  registerForm= new FormGroup({
    name: new FormControl('', [Validators.pattern(/\s/), Validators.required]),
    identificacion: new FormControl('', [Validators.pattern('[0-9]'), Validators.required]),
    nacimiento: new FormControl(new Date(), Validators.required),
    adress: new FormControl('', [Validators.pattern(''), Validators.required]),
    phone: new FormControl('', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.required])

  })

  onSubmit(){

    if(this.loginForm.valid){

      this.submitEM.emit(this.loginForm.value);
      // console.log(`'%c'USER: ${value.email} - PASSWORD: ${value.password}`)
      console.log("se subio")
    }
  }
  submit(){

  }
  @Output() submitEM = new EventEmitter();
    constructor(){}
    ngOnInit(): void {

    }
  }
  export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value === confirmPassword.value ? { confirmPassword: true } : null;
  };
