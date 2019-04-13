
import keycode from 'keycode'

class Keybind {
  constructor (bindings) {
    this.bindings = []
    bindings.forEach(this.add.bind(this))
  }

  add ({ key, keys = [],  handler }) {
    if (key) {
      keys.push(key)
    }

    keys.forEach(k => {
      const binding = window.addEventListener('keydown', (e) => {
        const eventKey = keycode(e)
        if (eventKey === k) {
          e.preventDefault()
          handler()
        }
      })
      this.bindings.push(binding)
    })
  }
}

export default Keybind

