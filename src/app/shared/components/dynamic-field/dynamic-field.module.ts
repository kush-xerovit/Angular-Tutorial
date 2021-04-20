import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// directive
import { DynamicFieldDirective } from './dynamic-field.directive';
import { CheckBoxComponent } from './check-box/check-box.component'

// component

const components = [
  InputComponent,
  CheckBoxComponent
]
const directive = [DynamicFieldDirective]

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
]

@NgModule({
  declarations: [...components, ...directive, CheckBoxComponent],
  imports: [
    ...modules
  ],
  exports: [...components, ...directive,...modules],
})
export class DynamicFieldModule { }
