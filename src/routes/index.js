// Importo los strings que serán convertidos en elementos HTML
import { Home } from '../pages/Home.js'
import { Welcome } from '../pages/Welcome.js'
import { Error404 } from '../pages/Error404.js'
import { getHash } from '../utils/getHash.js'
import { resolveRoutes } from '../utils/resolveRoutes.js'
// Guardo el div del HTML en una constante
const $root = document.querySelector('#root')

// Establezco cuáles serán las páginas de cada ruta
const routes = {
  '/': Home,
  '/:id': Welcome
}

export const router = async () => {
  const hash = getHash()
  const route = await resolveRoutes(hash)

  const render = routes[route] ? routes[route] : Error404
  $root.innerHTML = await render
}