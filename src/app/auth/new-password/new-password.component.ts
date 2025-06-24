import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  setpassword: FormGroup;
  changPasswordAlertId='changePasswordAlertId';

  constructor(private formBuilder: FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
    this.setpassword = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirm: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  confirmpassword(data) {
    this.authservice.changePassword(data,this.changPasswordAlertId);
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('newPassword').value;
    let confirmPass = group.get('confirm').value;

    return pass === confirmPass ? null : { notSame: true }
  }
}
