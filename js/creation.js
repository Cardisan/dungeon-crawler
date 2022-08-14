class Category{
	constructor(name, image, specialAction, isPickable, isSingleUse){
		this.name = name;
		this.image = image;
		this.specialAction = specialAction;
		this.isPickable = isPickable;
		this.isSingleUse = isSingleUse;
	}
}

let staircase = new Category('staircase', staircaseImg, 'nextLevel', false, false);