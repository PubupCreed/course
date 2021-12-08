export default class Loader {
    #active = false
    constructor(slot) {
        this.slot = slot
        this.defineLoader()
    }

    defineLoader() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('loader-wrapper')
        wrapper.innerHTML = `
            <div class="loader">
            <div class="typing_loader"></div>
            </div>
        `

        this.loaderElement = wrapper
        this.slot.replaceWith(this.loaderElement)
    }

    get active() {
        return this.#active
    }

    set active (value) {
        if(value) {
            this.loaderElement.classList.add('.active')
        } else {
            this.loaderElement.classList.remove('.active')
        }

        this.#active = value
    }

    show() {
        this.active = true
    }

    close() {
        this.active = false
    }
}