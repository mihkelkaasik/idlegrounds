import { Injectable } from '@angular/core';

import { UnitComponent } from '../classes/unit.component';
import { UNITS } from '../data/units.mock';

@Injectable()
export class UnitService {
    getUnits(): Promise<UnitComponent[]> {
        return Promise.resolve(UNITS);
    }

    getUnit(id: number): Promise<UnitComponent> {
        return this.getUnits().then(units => units.find(unit => unit.id == id));
    }
}