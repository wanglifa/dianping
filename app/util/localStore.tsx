export default {
  getItem(key: string) {
    return localStorage.getItem(key)
  },
  setItem(key: string, value: string) {
    return localStorage.setItem(key, value)
  }
}