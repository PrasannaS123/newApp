

export class LaptopList {
    name: string;
    description: string;
    laptopID: number;
    imagePath: string;
  


    constructor(name: string, desc: string, id: number, imagePath: string,) {
        this.name = name;
        this.description = desc;
        this.laptopID = id,
        this.imagePath = imagePath;
       
    }
}
