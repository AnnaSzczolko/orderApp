import React from 'react'
import Header from './components/Header'
import Meals from './components/Meals'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './store'
import Orders from './components/Orders'

export default function App() {
  return (
    <>
    <Provider store={store}>

    <Header></Header>
    <Cart></Cart>
    <Meals></Meals>
    <Orders></Orders>
 
    </Provider>
    
    </>
  )
}
