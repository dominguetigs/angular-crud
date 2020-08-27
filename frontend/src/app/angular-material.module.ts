import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatListModule, MatSidenavModule, MatToolbarModule],
  exports: [MatListModule, MatSidenavModule, MatToolbarModule],
})
export class AngularMaterialModule {}
