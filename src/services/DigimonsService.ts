import { DigimonI } from "../interfaces/DigimonInterfaces";
const db = require('../db/Digimons.json');

module DigimonsService { 
    export function getAll(): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        return digimons
    }
    export function get(id: number): DigimonI {
        const digimons: Array<DigimonI> = db;
        const digimon: Array<DigimonI> = digimons.filter(e => e.id === id);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon[0];
    }
    export function getName(name: string): DigimonI {
        const pokemones: Array<DigimonI> = db;
        // const pokemon : Array<DigimonI> = pokemones.filter(e=>e.name === name);
        const pokemon: Array<DigimonI> = pokemones.filter(function (el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
        if (pokemon.length < 1) {
            throw "No se encontraton pokemones";
        }
        return pokemon[0]
    }
    export function getType(type: string): Array<DigimonI> {
        const pokemones: Array<DigimonI> = db;
        let matches: Array<DigimonI> = [];
        pokemones.forEach(pokemon => {
            const found = pokemon.type.filter(e => e.name === type);
            if (found.length > 0) {
                matches.push(pokemon);
            }
        })
        if (matches.length < 1) {
            throw "No se encontro el tipo";
        }
        // const pokemon : Array<DigimonI> = pokemones.filter(e=>e.name === name);

        return matches;
    }
    export function getCreate(id:number,name:string,nombreTipo:string,fuerteTipo:string,debilTipo:string,img:string): DigimonI {
        const digimons: Array<DigimonI> = db;
        const obj: DigimonI={
            id:id,
            name:name,
            type:[
                {name:nombreTipo,strongAgainst:fuerteTipo,weakAgainst:debilTipo}
            ],
            img:img

        }
        db.push(obj);
        return db;
    }

    export function getFuerte(name:string): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        // digimons.filter(name)
        let digimon = digimons.filter(e=>e.name.toLowerCase()=== name.toLowerCase());
        if(digimons.length<1){
            throw "No se encontro el primer pokemon";
        }
        const type1 = digimon[0].type.filter(e=> e.name);
        let matches: Array<DigimonI> = [];

        digimons.forEach(pokemon => {
            const found = pokemon.type.filter(e => e.weakAgainst === type1[0].strongAgainst);
            if (found.length > 0) {
                matches.push(pokemon);
            }
        })
        if (matches.length < 1) {
            throw "No se encontro el tipo";
        }
        // const pokemon : Array<DigimonI> = pokemones.filter(e=>e.name === name);

        return matches;
    }
}

export default DigimonsService;