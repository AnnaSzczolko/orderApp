
import express from 'express'
import fs from 'node:fs/promises'
import path from "path";

const app = express()
app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	next()
})

app.get('/', (req, res) => {
  res.json({
    message: "OrderApp API is running",
    endpoints: {
      meals: "/meals",
      orders: "/orders"
    }
  })
})

app.get('/meals', async (req, res) => {
	try {
		const meals = await fs.readFile('./data/meals.json', 'utf8')
		res.send(JSON.parse(meals))
	} catch (error) {
		res.status(500).json({ message: 'Loading meals failed.' })
	}
})

app.post('/orders', async (req, res) => {
	const order = req.body
	try {
		const filePath = './data/orders.json'

		const data = await fs.readFile(filePath, 'utf8')
		const orders = JSON.parse(data)

		orders.push(order)

		await fs.writeFile(filePath, JSON.stringify(orders, null, 2))

		res.status(201).json({
			message: 'Order created',
		})
	} catch (error) {
		res.status(500).json({
			message: 'creating order failed.',
		})
	}
})

app.get('/orders', async (req,res) => {
  try {
    const data = await fs.readFile('./data/orders.json', 'utf8')
    const orders = JSON.parse(data)

    res.json(orders)
  } catch(error){
    res.status(500).json({message : 'Loading orders failed.'})
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

