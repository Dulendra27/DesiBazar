import { useContext } from "react"
import { productsContext} from "./Function"

export default function Electronic (){
    const {electric,handleProductClick,count}= useContext(productsContext)
return(
    <>
    <div className="list-container">
    
    {electric.map((product)=>(
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