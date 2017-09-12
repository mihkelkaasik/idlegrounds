import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TargetsComponent } from './targets/targets.component';
import { BarracksComponent } from './barracks/barracks.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { BuildingComponent } from './building/building.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainAreaComponent } from './main-area/main-area.component';

import { AppRoutingModule } from './app-routing.module';

import { UnitService } from './services/unit.service';
import { BattlegroundService } from './services/battleground.service';

import { BattlegroundComponent } from './battleground/battleground.component';
import { EvolveComponent } from './evolve/evolve.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetsComponent,
    BarracksComponent,
    AchievementsComponent,
    BuildingComponent,
    BuildingsComponent,
    SideBarComponent,
    MainAreaComponent,
    BattlegroundComponent,
    EvolveComponent,
    OptionsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    UnitService, 
    BattlegroundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
