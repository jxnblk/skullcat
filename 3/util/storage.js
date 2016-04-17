
const storage = {
  set x (val) {
    localStorage.setItem('x', true)
  },
  get x () {
    return localStorage.getItem('x')
  }
}

export default storage

