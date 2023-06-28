import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { wildPokemonsService } from "../services/WildPokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawWild() {
    const wildPokemons = AppState.wildPokemon

    let template = ''

    wildPokemons.forEach(w => {
        template += `
    <li role="button" onclick="app.WildPokemonsController.setActivePokemon('${w.url}')" class="selectable fs-3 m-2">
        ${w.name}
    </li>
    `
    })

    setHTML('wildList', template)
}

function _drawActiveWild() {
    const activePokemon = AppState.activePokemon

    setHTML('activeWild', activePokemon.activeWildTemplate)
}

export class WildPokemonsController {
    constructor() {
        console.log("Wild Pokemons Controller Loaded")

        this.getWildPokemon()

        AppState.on('wildPokemon', _drawWild)
        AppState.on('activePokemon', _drawActiveWild)
    }

    async getWildPokemon() {
        try {
            await wildPokemonsService.getWildPokemon()
        } catch (error) {
            console.log(error)
            Pop.error(error.message)
        }
    }

    async setActivePokemon(pokeUrl) {
        try {
            console.log(pokeUrl)
            wildPokemonsService.setActivePokemon(pokeUrl)
        } catch (error) {
            console.log(error)
            Pop.error(error.message)
        }
    }
}