class Player extends Entity
{
    equipment;

    // name: string, maxHP: int, HP: int, stagePosition: Point
    constructor(name, maxHP, HP, stagePosition){
        super(name, maxHP, HP, stagePosition);
        this.equipment = new Equipment();
    }

    // Return current player's weapon 
    getCurrentWeapon(){
        return this.equipment.getCurrentWeapon();
    }
}