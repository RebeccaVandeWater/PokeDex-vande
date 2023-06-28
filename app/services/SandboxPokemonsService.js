import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class SandboxPokemonsService {
    async catchPokemon() {
        const currentActive = AppState.activePokemon

        const res = await api.post('api/pokemon', currentActive)

        console.log("Was this able to post without issues?", res.data)
    }

}

export const sandboxPokemonsService = new SandboxPokemonsService