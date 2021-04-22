import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal'
import { Subscription } from 'rxjs'
import { ModalFormComponent } from 'src/app/shared/components/modal/modal-form/modal-form.component'
import { Validators } from '@angular/forms'
import { DynamicFieldModel } from 'src/app/shared/components/dynamic-field'
import { take } from 'rxjs/operators'
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  modalSub: Subscription
  dataSub: Subscription
  fieldConfigs: Array<DynamicFieldModel> = [
    {
      name: 'image',
      type: 'image',
    },
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
      label: 'Subscription',
      name: 'subscription',
      type: 'select',
      class: 'col-md-6',
      placeholder: 'eg: Public',
      options: [
        { value: 'Public', text: 'Public' },
        { value: 'Premium ', text: 'Premium ' },
      ],
      value: 'Public',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Please select available',
        },
      ],
    },
  ]
  data: any;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params["data"]) {
        this.data = JSON.parse(params["data"])
        console.log(JSON.parse(params["data"]));
      }

    });
  }

  // modal
  doModal(record?: any, action?: string) {
    if (action) {
      const updateData = {
        ...record,
      }
      record = updateData
    }

    const bsModalRef = this.modalService.show(
      !record || action ? ModalFormComponent : ModalFormComponent,
      {
        initialState: {
          data: record || action ? record : null,
          fieldConfigs: this.fieldConfigs,
        },
        class: 'modal-dialog modal-dialog-centered modal-xl',
      }
    )
    this.modalSub = bsModalRef.content.action.subscribe((value) => {
      if (value) {
        console.log(value)
      }
    })
  }
}
