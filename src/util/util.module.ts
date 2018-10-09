import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './pipes/highlight.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightPipe
  ], exports: [
    HighlightPipe    
  ]
})
export class UtilModule { }
