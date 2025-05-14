import { useContext } from "react"
import { productsContext} from "./Function"
export default function Products(){
    const {handleProductClick,maxPrice,handlePriceRange,check,handleChecked,checkedProducts}= useContext(productsContext)
    return(
    <>
    <div className="products-container">
    <div className="rangeCheck-container">
      <label>
      <input
     type="range"
     min="0"
     max="1000"
     className="price-range"
      value={maxPrice} 
      onChange={handlePriceRange}
     /> 
      {maxPrice}
      </label>
  
     <label>
     <input     
    type="checkbox"
    name= "men's clothing"
     className="men-check"
    checked={check["men's clothing"]} 
    onChange={handleChecked}
    /> 
    Men
     </label>
   <label>
   <input
     type="checkbox"
     name="women's clothing"
     className="women-check"
    checked={check["women's clothing" ]} 
    onChange={handleChecked}
     />
     Women
   </label>
    <label>
    <input
     type="checkbox"
     name="electronics"
    className="electronic-check"
    checked={check.electronics}
    onChange={handleChecked}
    /> 
    Electronic
    </label>
   <label>
   <input
    type="checkbox"
    name="jewelery"
     className="jewelery-check"
     checked={check.jewelery}
     onChange={handleChecked}
    />
    Jewelery
   </label>
   
    </div>

    <div className="productsList-container">
       
       {checkedProducts.map((product)=>(
       
       <div className='productsList-item' key={product.id} >
              <img src={product.image} alt="" className='product-img'/>
               <h2 className='product-name'>{product.title}</h2>
               <p className='product-price'>PRICE : ${product.price} </p>
               <p className="category">CATEGORY : {product.category}  </p>
               <button className="add" onClick={()=>handleProductClick(product)}>Add to Cart </button>
             
        </div>
       ))}
   </div>
   </div>
    </>
    )
}


