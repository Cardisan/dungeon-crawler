class Enemy extends Entity
{
    weapon;

    // name: string, maxHP: int, HP: int, stageCoords: Point
    constructor(name, maxHP, HP, stageCoords, weapon){
        super(name, maxHP, HP, stageCoords);
        this.weapon = weapon;
    }

    // Return current enemy's weapon 
    getCurrentWeapon(){
        return this.weapon;
    }
}