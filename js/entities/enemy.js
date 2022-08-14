class Enemy extends Entity
{
    weapon;

    // name: string, maxHP: int, HP: int, stagePosition: Point
    constructor(name, maxHP, HP, stagePosition, weapon){
        super(name, maxHP, HP, stagePosition);
        this.weapon = weapon;
    }

    // Return current player's weapon 
    getCurrentWeapon(){
        return this.weapon;
    }
}