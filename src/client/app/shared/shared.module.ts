import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdIconModule, MdTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NameListService } from './name-list/name-list.service';
import { PathwayComponent } from './pathway/pathway';
import { ProfileBoxComponent } from './profilebox/profilebox';
import { ButtonBadgeComponent } from './button-badge/button-badge.component';
import { FooterComponent } from './footer/footer';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdButtonModule,
    MdIconModule,
    MdTooltipModule,
    FlexLayoutModule
  ],
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    PathwayComponent,
    ProfileBoxComponent,
    ButtonBadgeComponent,
    FooterComponent
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    PathwayComponent,
    ProfileBoxComponent,
    ButtonBadgeComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
