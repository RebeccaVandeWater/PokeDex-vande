import { pokeApi } from "./AxiosService.js"

class WildPokemonsService {
    getWildPokemon() {
        const res = pokeApi.get('api/v2/pokemon')

        console.log(res.data)
    }

}

export const wildPokemonsService = new WildPokemonsService