import { wildPokemonsService } from "../services/WildPokemonsService.js"
import { Pop } from "../utils/Pop.js"

export class WildPokemonsController {
    constructor() {
        console.log("Wild Pokemons Controller Loaded")

        this.getWildPokemon()
    }

    async getWildPokemon() {
        try {
            wildPokemonsService.getWildPokemon()
        } catch (error) {
            console.log(error)
            Pop.error(error.message)
        }
    }
}