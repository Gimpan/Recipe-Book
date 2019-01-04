import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { ShortenPipe } from './shorten.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  declarations: [
    DropdownDirective,
    ShortenPipe
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    ShortenPipe
  ],
  providers: []
})
export class SharedModule {

}
