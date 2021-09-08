import { opine, json } from 'https://deno.land/x/opine@1.7.2/mod.ts'

/**
 * @author wilian
*/

const app = opine()
const port = 8080

// use middlewares
app.use(json())

app.get('/', (_req, res) => {
  res.json({
    message: 'Hola mundo'
  })
})

app.listen(port, () => console.log(`server in http://localhost:${port}`))
