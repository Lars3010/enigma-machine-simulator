const Config = require('./config.js');

class Rotor{
    constructor(type, letters, step){
        this.type = type;
        this.letters = letters;
        this.step = step;
    }
}
const rotor1 = new Rotor(Config.rotors.I,Config.rotors.I.letters, Config.rotors.I.step);
console.log(rotor1);
