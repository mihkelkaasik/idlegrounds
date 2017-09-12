import { TargetComponent } from '../classes/target.component';

export const TARGETS: TargetComponent[] = 
  [
    {
      id: 1, 
      name: "Villager",
      damage: 1,
      health: 5,
      damageAir: 1,
      damageGround: 1,
      damageWater: 1,
      type: 1,
      value: 1
    },
    {
      id: 2, 
      name: "Fisher",
      damage: 0.7,
      health: 3,
      damageAir: 1,
      damageGround: 1,
      damageWater: 1,
      type: 1,
      value: 2
    },
    {
      id: 3, 
      name: "Miner",
      damage: 1.5,
      health: 10,
      damageAir: 1.5,
      damageGround: 2,
      damageWater: 1,
      type: 1,
      value: 3
    }
  ];