class Fight{
    entityA;
    entityB;
    entityATurn;    // is A entity's turn?
    isFinished;

    // entityA: Entity, entityB: Entity, entityATurn: bool
    constructor(entityA, entityB, entityATurn = true){
        this.entityA = entityA;
        this.entityB = entityB;
        this.entityATurn = entityATurn;
        this.isFinished = false;
    }

    // Entity hits another entity. If "is_A_hits_B" == true, "entityA" hits "entityB", if "is_A_hits_B" == false, "entityB" hits "entityA"
    hitActionTo(is_A_hits_B){
        if(is_A_hits_B == true){
            let dealedDmg = Entity.dealDmgToEntity_withWeapon(this.entityB, this.entityA.getCurrentWeapon());
            if(DEBUG_MODE == true && DEBUG_MODE_FightClass == true){
                console.log(this.entityA.name + " = " + this.entityA.HP + "/" + this.entityA.maxHP + ", " + this.entityB.name + " HP = " + this.entityB.HP + "/" + this.entityB.maxHP + ", Dealt damage to " + this.entityB.name + " = " + dealedDmg);
            }
            if(this.entityB.alive == false){
                if(DEBUG_MODE == true && DEBUG_MODE_FightClass == true)
                    console.log(this.entityA.name + " wins the fight !!!");
                this.isFinished = true;
                return true;
            }
        }
        else{
            let dealedDmg = Entity.dealDmgToEntity_withWeapon(this.entityA, this.entityB.getCurrentWeapon());
            if(DEBUG_MODE == true && DEBUG_MODE_FightClass == true){
                console.log(this.entityA.name + " = " + this.entityA.HP + "/" + this.entityA.maxHP + ", " + this.entityB.name + " HP = " + this.entityB.HP + "/" + this.entityB.maxHP + ", Dealt damage to " + this.entityA.name + " = " + dealedDmg);
            }
            if(this.entityA.alive == false){
                if(DEBUG_MODE == true && DEBUG_MODE_FightClass == true)
                    console.log(this.entityB.name + " wins the fight !!!");
                this.isFinished = true;
                return true;
            }
        }
        return false;
    }

    // The hit of the entity taking the turn is performed
    hitAction(){
        this.hitActionTo(this.entityATurn);
        if(this.entityATurn == true)
            this.entityATurn = false;
        else
            this.entityATurn = true;
    }
}