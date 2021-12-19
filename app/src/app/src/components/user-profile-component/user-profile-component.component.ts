import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

interface DialogData{
  user: User;
}
@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.scss'],
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  currentUserAccount: User;
  resetSuccess: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<User>,
    private userService: UserService
  ) {}

  ngOnInit() {
    console.log(this.data.user)
    this.userService.getUser().subscribe(user => {
      this.currentUserAccount = user;
      this.profileForm = this.buildProfileFormGroup();
      this.patchProfileFormGroup(this.data.user);
    });
  }

  onDismiss() {
    this.dialogRef.close(false);
  }

  private buildProfileFormGroup(): FormGroup {
    const form = this.fb.group(
      {
        email: [
          { value: this.currentUserAccount.email },
          Validators.compose([Validators.required, Validators.email]),
        ],
        firstName: [{ value: this.currentUserAccount.firstName }, Validators.required],
        lastName: [{ value: this.currentUserAccount.lastName }, Validators.required],
      },
      {
        updateOn: 'blur',
      }
    );
    form.valueChanges.pipe().subscribe((value: User) => {
      if (form.valid) {
        this.userService.upsertCurrentUserAccount(value);
      }
    });

    return form;
  }

  private patchProfileFormGroup(userAccount: User) {
    const formValue: User = {
      email: userAccount?.email,
      firstName: userAccount?.firstName,
      lastName: userAccount?.lastName,
    };
    this.profileForm.patchValue(formValue, {
      emitEvent: false,
      onlySelf: true,
    });
  }
}
