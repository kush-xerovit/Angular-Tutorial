import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core'

import { DynamicFieldModel } from './dynamic-field.model'
import { FormGroup } from '@angular/forms'
import { InputComponent } from './input/input.component'
import { CheckBoxComponent } from './check-box/check-box.component'


const componentMapper = {
  input: InputComponent,
  checkbox: CheckBoxComponent,
}

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit, AfterViewInit {
  @Input() field: DynamicFieldModel
  @Input() formGroup: FormGroup
  componentRef: any

  @Output() eventOutput: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    )
    this.componentRef = this.container.createComponent(factory)
    this.componentRef.instance.field = this.field
    this.componentRef.instance.formGroup = this.formGroup
  }

  ngAfterViewInit() {
    // get topic data
    if (this.componentRef.instance.field.name === 'topic') {
      this.componentRef.instance.output.subscribe((event) => {
        this.eventOutput.emit(event)
      })
    }
  }
}
