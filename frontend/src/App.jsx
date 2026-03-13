import React from 'react'
import Header from './components/Header'
import Meals from './components/Meals'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './store'
import Orders from './components/Orders'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export default function App() {
  return (
    <>
    <Provider store={store}>

    <Header></Header>
    <Cart></Cart>
    <Meals></Meals>
    <Orders></Orders>
 
    <ToastContainer position='top-right' autoClose={2000}></ToastContainer>
    </Provider>
    
    </>
  )
}
