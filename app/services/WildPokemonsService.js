import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class WildPokemonsService {

    async getWildPokemon() {
        const res = await pokeApi.get('api/v2/pokemon')

        console.log(res.data)

        AppState.wildPokemon = res.data.results

        console.log("Here are our wild pokemon", AppState.wildPokemon)
    }

    async setActivePokemon(pokeUrl) {
        const res = await pokeApi.get(`${pokeUrl}`)

        console.log(res.data)

        const newPokemon = new Pokemon(res.data)

        AppState.activePokemon = newPokemon
    }

}

export const wildPokemonsService = new WildPokemonsService