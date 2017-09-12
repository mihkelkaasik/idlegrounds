import { Component, OnInit } from '@angular/core';

import { TargetComponent } from '../classes/target.component';
import { BattlegroundService } from '../services/battleground.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.css']
})
export class BattlegroundComponent implements OnInit {

  targets: TargetComponent[];

  constructor(
    private battlegroundService: BattlegroundService
  ) { }

  ngOnInit() {
    this.getTargets();
  }

  getTargets(): void {
    this.battlegroundService.getTargets().then(targets => this.targets = targets);
  }

}
