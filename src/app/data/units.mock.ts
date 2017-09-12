import { UnitComponent } from '../classes/unit.component';

export const UNITS: UnitComponent[] = 
  [
    {
      id: 1, 
      name: "Swordsman",
      damage: 1,
      health: 5,
      damageAir: 1,
      damageGround: 1,
      damageWater: 1
    },
    {
      id: 2, 
      name: "Archer",
      damage: 0.7,
      health: 3,
      damageAir: 1,
      damageGround: 1,
      damageWater: 1
    },
    {
      id: 3, 
      name: "Horseman",
      damage: 1.5,
      health: 10,
      damageAir: 1.5,
      damageGround: 2,
      damageWater: 1
    }
  ];