export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName ? data.nickName : ''
        this.img = data.sprites ? data.sprites.front_default : ''
        this.weight = data.weight ? data.weight : ''
        this.height = data.height ? data.height : ''
        this.types = data.types || []
    }

    get activeWildTemplate() {
        return /*html*/`
        <div class="d-flex flex-column align-items-center justify-content-center mt-4">
            <img class="img-fluid me-3 img-size" src="${this.img}" alt="${this.name}">

            <h1>${this.name}</h1>

            <div class="d-flex fs-4">
                <p class="me-4">Height: ${this.height}</p>
                <p class="me-4">Weight: ${this.weight} lbs</p>
                <p>Types: ${this.ComputeTypes} </p>
            </div>

            <div>
                <button onclick="app.SandboxPokemonsController.catchPokemon('${this.name}')" class="btn btn-success">
                Catch
                </button>
            </div>
        </div>
        `
    }

    get ComputeTypes() {
        let template = ''

        this.types.forEach(t => template += `<span>${t.type.name} ${this.types.length > 1 && t != this.types[this.types.length - 1] ? ' , ' : ''}</span>`)

        return template
    }
}