import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SongSelectionComponent } from './song-selection.component';

const routes: Routes = [
  {
    path: '',
    component: SongSelectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongSelectionRoutingModule { }
