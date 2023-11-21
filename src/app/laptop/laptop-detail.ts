export class LaptopDetail {
    imagePath: string;
    features: string;
    core: string;
    tone: string;
    port: string;
    keyboard: string;
    price: string;
    
    constructor(imagePath: string, features: string, core: string, tone: string, port: string, keyboard:string,price:string) {
        this.imagePath = imagePath;
        this.features = features;
        this.core = core;
        this.tone = tone;
        this.port = port;
        this.keyboard = keyboard;
        this.price = price;
    }
}
