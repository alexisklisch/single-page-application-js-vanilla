import { router } from './routes/index.js'
const $root = document.querySelector('#root')

window.addEventListener('DOMContentLoaded', router)
window.addEventListener('hashChange', router)