export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName ? data.nickName : ''
        this.img = data.sprites ? data.sprites.front_default : ''
        this.weight = data.weight ? data.weight : ''
        this.height = data.height ? data.height : ''

        // FIXME Add types from Sandbox, fix the img for the Sandbox to read
    }

    get activeWildTemplate() {
        return /*html*/`
        <div class="d-flex flex-column align-items-center justify-content-center">
            <img class="img-fluid me-3 img-size" src="${this.img}" alt="${this.name}">
            <h1>${this.name}</h1>
            <p><span>Height: ${this.height}</span> <span>Weight: ${this.weight}</span> </p>
            <div>
                <button onclick="" class="btn btn-success">
                Catch
                </button>
            </div>
        </div>
        `
    }
}