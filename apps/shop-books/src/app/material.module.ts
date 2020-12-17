import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule, FlexLayoutModule,
    MatButtonModule, MatInputModule, MatCardModule, MatDialogModule],
  exports: [MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule, FlexLayoutModule,
    MatButtonModule, MatInputModule, MatCardModule, MatDialogModule]
})
export class AppMaterialModule {}
