import men_style from '../assets/men_style.jpg'
import women_style from '../assets/women_style.webp'
import men_women1 from '../assets/men_women1.jpg'
import men_women2 from '../assets/men_women2.jpg'
import {Link,Routes,Route } from "react-router"
import Products from './Products'
export default function Home(){

    return(
   <>   
   
   <main className="main">
        <div className="container">
          <div className="grid">
            <div className="image-container">
              <img
              className='men-img'
                src={men_style}
                alt=""
              />
            </div>
            <div className="content">
              <h1>Carry & Buy Products</h1>
              <p className="subtitle">Elevate your look with the ultimate statement pieces</p>
              <div className="products">
                <div className="product">
                  <img src={women_style} alt="" className='home-img' />
                 
                </div>
                <div className="product">
                  <img src={men_women2} alt="" className='home-img' />
                 
                </div>
                <div className="product">
                  <img src={men_women1} alt=""  className='home-img'/>
                 
                </div>
              </div>
              <p className="description">
                Discover a curated collection of luxury designer Fashionable Products. Timeless sophistication, impeccable craftsmanship, and iconic styles—all in one place.
              </p>
              <Link to="/Products"><button className="shop-now">Shop now</button></Link>
            </div>
          </div>
        </div>
      </main>
      <Routes>
  <Route path="/Products" element={<Products/>}/>  
   </Routes>
    </>

    )

}