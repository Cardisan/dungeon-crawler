class Weapon extends Item{
    damageMin;
    damageMax;

    // name: string, damageMin: int, damageMax: int, value?: int
    constructor(name, damageMin, damageMax, value = 0){
        super(name, value);
        if(damageMin > damageMax)
            throw "Minimal damage can't be lower than maximal damage!!! damageMin = " + damageMin + ", damageMax = " + damageMax;
        this.damageMin = damageMin;
        this.damageMax = damageMax;
    }
}