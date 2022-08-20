class Snake extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "snake", damageMin = 3, damageMax = 6){
        super(name, 10, 10, new Point(), new Weapon("Tail and jaw", damageMin, damageMax, 0));
    }
}

class RedSnake extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "red snake", damageMin = 1, damageMax = 10){
        super(name, 20, 20, new Point(), new Weapon("Tail and jaw", damageMin, damageMax, 0));
    }
}

class FireSnake extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "fire snake", damageMin = 8, damageMax = 12){
        super(name, 40, 40, new Point(), new Weapon("Tail, jaw and fire breath", damageMin, damageMax, 0));
    }
}

class Sheep extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "sheep", damageMin = 1, damageMax = 2){
        super(name, 15, 15, new Point(), new Weapon("Jaw", damageMin, damageMax, 0));
    }
}

class Rat extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "rat", damageMin = 3, damageMax = 5){
        super(name, 10, 10, new Point(), new Weapon("Jaw", damageMin, damageMax, 0));
    }
}

class MadRat extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "mad rat", damageMin = 7, damageMax = 9){
        super(name, 25, 25, new Point(), new Weapon("Jaw", damageMin, damageMax, 0));
    }
}

class Bear extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "bear", damageMin = 5, damageMax = 15){
        super(name, 30, 30, new Point(), new Weapon("Jaw and claws", damageMin, damageMax, 0));
    }
}

class BlueBear extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "blue bear", damageMin = 10, damageMax = 20){
        super(name, 55, 55, new Point(), new Weapon("Jaw and claws", damageMin, damageMax, 0));
    }
}

class Wolf extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "wolf", damageMin = 7, damageMax = 12){
        super(name, 20, 20, new Point(), new Weapon("Jaw and claws", damageMin, damageMax, 0));
    }
}

class BrownWolf extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "brown wolf", damageMin = 10, damageMax = 15){
        super(name, 30, 30, new Point(), new Weapon("Jaw and claws", damageMin, damageMax, 0));
    }
}

class DarkWolf extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "dark wolf", damageMin = 10, damageMax = 20){
        super(name, 50, 50, new Point(), new Weapon("Jaw and claws", damageMin, damageMax, 0));
    }
}

class NecroWolf extends Enemy
{
    // name: string, damageMin: int, damageMax: int
    constructor(name = "necro wolf", damageMin = 20, damageMax = 35){
        super(name, 100, 100, new Point(), new Weapon("Jaw and claws", damageMin, damageMax, 0));
    }
}