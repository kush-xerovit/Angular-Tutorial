import {
  Component,
  OnDestroy,
  OnInit,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { DynamicFieldModel } from 'src/app/shared/components/dynamic-field'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  fieldConfigs: Array<DynamicFieldModel> = [
    {
      label: 'Name',
      name: 'name',
      type: 'input',
      placeholder: 'Jon Snow',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Please enter name',
        },
      ],
    },
    {
      label: 'Email',
      name: 'email',
      type: 'input',
      placeholder: 'jon.snow@email.com',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Please enter email',
        },
        {
          name: 'email',
          validator: Validators.email,
          message: 'Email must be a valid email address',
        },
      ],
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'input',
      placeholder: '09123456789',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Please enter phone',
        },
        {
          name: 'phoneValid',
          validator: 'phoneValidator',
          message: 'Invalid phone number',
        },
      ],
    },
  ]
  constructor(
  ) {}

  ngOnInit(): void {
    }


  onSubmit() {
  }

}
