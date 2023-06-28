import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js"
import { Pop } from "../utils/Pop.js"

export class SandboxPokemonsController {
    constructor() {
        console.log("Sandbox Pokemons Controller Loaded")
    }

    async catchPokemon() {
        try {
            await sandboxPokemonsService.catchPokemon()
        } catch (error) {
            console.log(error)
            Pop.error(error.message)
        }
    }
}