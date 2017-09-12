import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { BattlegroundComponent }  from './battleground/battleground.component';
import { BarracksComponent }      from './barracks/barracks.component';
import { BuildingsComponent }   from './buildings/buildings.component';
import { AchievementsComponent }   from './achievements/achievements.component';
import { EvolveComponent }   from './evolve/evolve.component';
import { OptionsComponent }   from './options/options.component';


 
const routes: Routes = [
  { path: '', redirectTo: '/battleground', pathMatch: 'full' },
  { path: 'battleground',   component: BattlegroundComponent },
  { path: 'barracks',       component: BarracksComponent },
  { path: 'buildings',      component: BuildingsComponent },
  { path: 'achievements',   component: AchievementsComponent },
  { path: 'evolve',         component: EvolveComponent },
  { path: 'options',        component: OptionsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}