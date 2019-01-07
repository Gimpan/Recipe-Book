import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { ShortenPipe } from './shorten.pipe';
import { CommonModule } from '@angular/common';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BlazingHighlightDirective } from './blazing-highlight.directive';
import { EavesdropperDirective } from './eavesdropper.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [],
  declarations: [
    DropdownDirective,
    ShortenPipe,
    BasicHighlightDirective,
    BlazingHighlightDirective,
    EavesdropperDirective,
    UnlessDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    ShortenPipe,
    BasicHighlightDirective,
    BlazingHighlightDirective,
    EavesdropperDirective,
    UnlessDirective
  ],
  providers: []
})
export class SharedModule {

}
