import { Component, OnInit } from '@angular/core';

import { UnitComponent } from '../classes/unit.component';
import { UnitService } from '../services/unit.service';

@Component({
  selector: 'app-barracks',
  templateUrl: './barracks.component.html',
  styleUrls: ['./barracks.component.css']
})

export class BarracksComponent implements OnInit {

  units: UnitComponent[];

  constructor(
    private unitService: UnitService
  ) { }

  ngOnInit() {
    this.getUnits();
  }

  getUnits(): void {
    this.unitService.getUnits().then(units => this.units = units)
  }


}
