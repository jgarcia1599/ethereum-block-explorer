import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

// Model the application state.
class Model {
    numBlock = 10
    constructor() {
        makeAutoObservable(this)
    }
}

const model = new Model()
export default model;