class Equipment
{
    gold;

    weapons;
    //armors; // TODO

    chosenWeaponIndex = -1;

    // -
    constructor(){
        this.weapons = [];
    }

    // Add item to equipment
    addItemToEquipment(item){
        if(item instanceof Weapon){
            this.weapons.push(item);
        }
    }

    // Equips weapon with givern index
    equipWeapon(index){
        this.chosenWeaponIndex = index;
    }

    // Returns current equiped weapon
    getCurrentWeapon(){
        return this.weapons[this.chosenWeaponIndex];
    }
}