import express from 'express';
import * as DigimonsController from './src/controllers/DigimonsController';
import * as PokemonController from './src/controllers/PokemonsController';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World with Typescript!')
})

router.get('/ts', (req, res) => {
    res.send('Typescript es lo máximo!')
})

router.get('/digimons', DigimonsController.getAll);
router.get('/digimons/:id', DigimonsController.get);
router.get('/digimons/name/:name', DigimonsController.getName);
router.get('/digimons/type/:type', DigimonsController.getType);
router.get('/digimons/fuerte/:name', DigimonsController.getFuerte);
router.get('/digimons/create/:id/:name/:nombreTipo/:fuerteTipo/:debilTipo/:img', DigimonsController.getCreate);

router.get('/pokemones', PokemonController.getAll);
router.get('/pokemones/number/:number', PokemonController.getNumber);
router.get('/pokemones/name/:name', PokemonController.getName);
router.get('/pokemones/type/:type', PokemonController.getType);
router.get('/pokemones/fuerte/:name', PokemonController.getFuerte); // Trae Contra quienes el es fuerte
router.get('/pokemones/debil/:name', PokemonController.getDebil); // Trae contra quienes el es Debil 
router.get('/pokemones/create/:id/:name/:nombreTipo/:fuerteTipo/:debilTipo/:img', PokemonController.getCreate);

// router.get('/pokemones/fuerte/:name', PokemonController.getFuerte);

// router.get('/digimons/:id', DigimonsController.get);

router.post("/", (req, res) => {
    console.log("Cuerpo:", req.body);
    res.status(200).send(req.body);
});
