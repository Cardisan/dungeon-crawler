class Entity
{
    name;
    maxHP;
    HP;
    stagePosition;
    alive;

    // name: string, maxHP: int, HP: int, stagePosition: Point
    constructor(name, maxHP, HP, stagePosition){
        if(typeof name == "string")
            this.name = name;
        else
            throw "Name should be string type!!! name = " + name;

        if(maxHP < 0)
            throw "Entity can't be created with less than or equal 0 maxHP!!! maxHP = " + maxHP;
        this.maxHP = maxHP;

        if(HP > 0)
            this.alive = true;
        else if(HP == 0) 
            this.alive = false;
        else
            throw "Entity can't be created with less than 0 HP!!! HP = " + HP;
        this.HP = HP;

        // TODO: if(NA ZEWNĄTRZ STAGE'A)
        // throw "Entity can't be outside of stage!!! stagePosition = " + stagePosition;
        this.stagePosition = stagePosition;
    }

    // Check if entity's HP is 0 or less and process its death
    killEntityIfHPLessThan0(){
        if(this.HP <= 0){
            this.HP = 0;
            this.alive = false;
        }
    }

    // Deal damage ("dmg") to entity ("entity")
    static dealDmgToEntity_withDmg(entity, dmg){
        entity.HP -= dmg;
        entity.killEntityIfHPLessThan0();
        return dmg;
    }

    // Deal random damage from range ("damageMin" - "damageMax") to entity ("entity")
    static dealDmgToEntity_withRange(entity, damageMin, damageMax){
        let dmg = Math.floor(Math.random() * (damageMax - damageMin + 1)) + damageMin;
        entity.HP -= dmg;
        entity.killEntityIfHPLessThan0();
        return dmg;
    }

    // Deal damage with weapon ("weapon") from range to entity ("entity")
    static dealDmgToEntity_withWeapon(entity, weapon){
        let dmg = Math.floor(Math.random() * (weapon.damageMax - weapon.damageMin + 1)) + weapon.damageMin;
        entity.HP -= dmg;
        entity.killEntityIfHPLessThan0();
        return dmg;
    }
}