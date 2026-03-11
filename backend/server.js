
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

const defaultOrders = [
  {
    "customer": {
      "name": "Anna",
      "surname": "Szczołko",
      "city": "Poznań",
      "street": "osiedle Lecha",
      "postal-code": "61-297"
    },
    "cart": [
      {
        "name": "Tagliatelle al Pesto",
        "price": 27.99,
        "id": "p2",
        "quantity": 1,
        "img": "http://localhost:3000/images/TagliatellealPesto.png",
        "orders": 256
      },
      {
        "name": "Spaghetti Pomodoro",
        "price": 24.99,
        "id": "p1",
        "quantity": 1,
        "img": "http://localhost:3000/images/SpaghettiPomodoro.png",
        "orders": 123
      }
    ]
  },
  {
    "customer": {
      "name": "Jan",
      "surname": "Nowak",
      "city": "Warszawa",
      "street": "Długa 18 ",
      "postal-code": "00-238"
    },
    "cart": [
      {
        "name": "Fusilli with Cream Sauce",
        "price": 26.99,
        "id": "p4",
        "quantity": 1,
        "img": "http://localhost:3000/images/Fusillisosemśmietanowym.png",
        "orders": 198
      },
      {
        "name": "Penne Arrabbiata",
        "price": 25.99,
        "id": "p3",
        "quantity": 1,
        "img": "http://localhost:3000/images/PenneArrabbiata.png",
        "orders": 342
      },
      {
        "name": "Linguine alle Vongole",
        "price": 34.99,
        "id": "p6",
        "quantity": 1,
        "img": "http://localhost:3000/images/LinguinealleVongole.png",
        "orders": 287
      }
    ]
  }
]

const PORT = process.env.PORT || 3000

async function startServer() {
  try {
    await fs.access('./data/orders.json')
  } catch {
    await fs.writeFile('./data/orders.json', JSON.stringify(defaultOrders, null, 2))
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()
