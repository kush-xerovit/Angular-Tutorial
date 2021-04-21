import {
  Component,
  OnInit,
} from '@angular/core'
import { FormGroup, Validators } from '@angular/forms'
import { DynamicFieldModel } from 'src/app/shared/components/dynamic-field'
import { FormService } from 'src/app/shared/services/form/form.service'
import * as moment from 'moment';

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
    {
      label: 'Favourite Frontend Language',
      name: 'language',
      type: 'radio',
      value: 'Angular',
      options: [
        { value: 'Angular', text: 'Angular' },
        { value: 'React', text: 'React' },
        { value: 'Vuejs', text: 'Vuejs' },
      ],
    },
    {
      label: 'Type Script',
      name: 'options',
      type: 'checkbox',
      value: '',
      options: [{ value: 'Type Script', text: 'Type Script' }],
    },
    {
      label: 'Remarks',
      name: 'remarks',
      type: 'textarea',
      placeholder: 'enter short description',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Please enter remarks',
        },
      ],
    },
    {
      label: 'Favourite Backend Language',
      name: 'backend',
      type: 'select',
      placeholder: 'PHP',
      options: [
        { value: 'PHP', text: 'PHP' },
        { value: 'Nodejs', text: 'Nodejs' },
        { value: 'Java', text: 'Java' },
      ],
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'please select backend language',
        },
      ],
    },
    {
      name: 'image',
      type: 'image',
    },
    {
      label: 'Current Date',
      name: 'scheduledTime',
      type: 'date',
      placeholder: 'current date',
      class: 'col-md-6',
      showPicker: true,
      minDate: moment().toDate(),
    },

  ]
  constructor(
    private formService: FormService,
  ) {}

  ngOnInit(): void {
    this.form = this.formService.buildForm(this.fieldConfigs)
    }


  onSubmit() {
    if (this.form.invalid)
    return this.formService.validateAllFormFields(this.form)
  }

}
