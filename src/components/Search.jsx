import { useContext } from "react"
import { productsContext} from "./Function"
export default function Search(){
const {searchProduct,searchValue,handleInputChange,handleSearch,handleProductClick,}= useContext(productsContext)
    return(
    <>
     <div className="search-container">
            <input
             type="text"
             className="search-input"
              value={searchValue}
            onChange={handleInputChange} 
            />
            <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
    <div className="list-container">
       
        {searchProduct.map((product)=>(
        <div className='list-item' key={product.id} >
               <img src={product.image} alt="" className='product-img'/>
                <h2 className='product-name'>{product.title}</h2>
                <p className='product-price'>PRICE : ${product.price} </p>
                <p className="category">CATEGORY : {product.category}  </p>
                <button className="add" onClick={()=>handleProductClick(product)}>Add to Cart</button>
         </div>
        ))}
         </div>
    </>
    )
} 