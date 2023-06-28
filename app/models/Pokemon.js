export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName ? data.nickName : ''
        this.img = data.img
        this.weight = data.weight ? data.weight : ''
        this.height = data.height ? data.height : ''

        // FIXME Add types from Sandbox
    }
}