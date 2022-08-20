class Player extends Entity
{
    equipment;

    // name: string, maxHP: int, HP: int, stageCoords: Point
    constructor(name, maxHP, HP, stageCoords){
        super(name, maxHP, HP, stageCoords);
        this.equipment = new Equipment();
    }

    // Return current player's weapon 
    getCurrentWeapon(){
        return this.equipment.getCurrentWeapon();
    }
}