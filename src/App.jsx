
import './App.css'
import { useContext } from "react"
import {Link,Routes,Route } from "react-router"
import { productsContext} from "./components/Function"
import Products from './components/Products'
import Men from './components/Men'
import Women from './components/Women'
import Electronic from './components/Electronic'
import Jewelery from './components/Jewelery'
import Home from './components/Home'
import Search from './components/Search'
import Login from './components/Login'
import CartItems from './components/CartItems'
export default function App() {
const {products}= useContext(productsContext)
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className='logo-container'>
          <Link to="/Home"><button className="logo">DesiBazar.</button></Link>
          </div>
          <nav className="nav">
            <Link to="/Products"><button>Products</button></Link>
            <Link to="/Men"><button>Men</button></Link>
            <Link to="/Women"><button>Women</button></Link>
            <Link to="/Electronic"><button>Electronic</button></Link>
            <Link to="/Jewelery"><button>Jewelery</button></Link>
          <Link to="/Search"><button>Search</button></Link>
          </nav>
          <div className="account-cart">
            <Link to="/Login" ><button className="account">Login</button></Link>
            <Link to="/CartItems"><button className="cart"> Cart  </button></Link>
          </div>
        </div>
      </header>
      
    <Routes>
      <Route path="/*" element={<Home/>}/>
      <Route path="/Home/*" element={<Home/>}/>
      <Route path="/Products" element={<Products/>}/>
       <Route path="/Men" element={<Men/>}/>  
      <Route path="/Women" element={<Women/>}/> 
      <Route path="/Electronic" element={<Electronic/>}/>
      <Route path="/Jewelery" element={<Jewelery/>}/> 
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/CartItems" element={<CartItems/>}/>
   </Routes>

  </div>
  )

}

