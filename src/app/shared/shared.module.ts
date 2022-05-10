import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ColorDirective } from './directive/color.directive';
import { PhonesPipe } from './pipes/phones.pipe';






@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ColorDirective,
    PhonesPipe
  ],
  exports:[ FooterComponent,
    HeaderComponent,
    ColorDirective,
    PhonesPipe
  ],

  imports: [
    CommonModule,
  
  ]
})
export class SharedModule { }
