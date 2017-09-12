import { Injectable } from '@angular/core';

import { TargetComponent } from '../classes/target.component';
import { TARGETS } from '../data/targets.mock';

@Injectable()
export class BattlegroundService {
    getTargets(): Promise<TargetComponent[]> {
        return Promise.resolve(TARGETS);
    }

    getUnit(id: number): Promise<TargetComponent> {
        return this.getTargets()
                .then(targets => targets.find(target => target.id == id));
    }
}