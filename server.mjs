/**
 * Here we use .mjs extension for using ESM in node.
 * Or we can set "type" as "module" in package.json.
 */
import express from 'express'

const app = express()
const port = 3000

app.use(express.static('./'))

app.listen(port, () => {
  console.log('listeneing 3000')
})
