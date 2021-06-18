import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzeComputerComponent } from './analyze-computer/analyze-computer.component';
import { CompareComputersComponent } from './compare-computers/compare-computers.component';
import { HomeComponent } from './home/home.component';
import { PdChoiceComponent } from './pd-choice/pd-choice.component';
import { SearchChoiceComponent } from './search-choice/search-choice.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'punto-vendita', component: PdChoiceComponent },
  { path: 'scelta/:puntovendita', component: SearchChoiceComponent },
  { path: 'confronta/:puntovendita', component: CompareComputersComponent },
  { path: 'esplora/:puntovendita', component: ExploreComponent },
  { path: 'analizza/:puntovendita', component: AnalyzeComputerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
