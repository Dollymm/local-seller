import Home from './pages/Home'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Form/Login'
import { SignUp } from './pages/Form/SignUp'
import Cart from './components/Cart'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>

  
    </>
  )
}

export default App
