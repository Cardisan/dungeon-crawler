/*abstract*/ class Item
{
    name;
    value;

    // name: string, value: int
    constructor(name, value = 0){
        if(typeof name == "string")
            this.name = name;
        else
            throw "Name of item should be string type!!! typeof name = " + name;

        if (value >= 0)
            this.value = value;
        else
            throw "Value of item should be greater than or equal 0!!! value = " + value;
    }
}