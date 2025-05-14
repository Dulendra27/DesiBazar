
import {createContext, useEffect, useState } from "react";
import axios from 'axios'
export const productsContext = createContext()
export default function Function(props){
   const [originalProduct,setOriginalProduct] = useState([])
    const [products,setProducts] = useState([]);
    const [searchValue,setSearchValue] = useState()
    const [cart,setCart] = useState([])
    const [men, setMen]= useState([])
    const [women,setWomen]= useState([])
    const [electric,setElectric]= useState([])
    const [jewelery,setJewelery]= useState([])
    const [maxPrice,setMaxPrice] = useState(1000)
    const [checkedProducts,setCheckedProducts] = useState([])
    const [searchProduct,setSearchProduct] = useState([])
    const [check,setCheck]= useState({
      'men\'s clothing ': false,
      'women\s clothing': false,
      electronics: false,
      jewelery: false,
    })
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(response =>{
           setProducts(response.data)
          setOriginalProduct(response.data)
          setCheckedProducts(response.data)
          setSearchProduct(response.data)
          console.log(products)
          const menProducts = response.data.filter(product => product.category=== "men's clothing")
          setMen(menProducts)
          const womenProducts = response.data.filter(product => product.category=== "women's clothing")
          setWomen(womenProducts)
          const eletricProducts = response.data.filter(product => product.category=== "electronics")
          setElectric(eletricProducts)
          const jeweleryProducts = response.data.filter(product => product.category=== "jewelery")
          setJewelery(jeweleryProducts)
        })
        .catch(error => {
           console.log(error)
        });
       
       },[])
            useEffect(()=>{
               const checked = Object.keys(check).filter(category => check[category]);
               if(checked.length === 0) {
                 const filteredPrice = products.filter(product => product.price <= maxPrice)
                  setCheckedProducts(filteredPrice)
               }else{
                  const checkFiltered = products.filter(product =>{
                     if(product.category === "men's clothing" && check["men's clothing"] && product.price <= maxPrice) return true;
                      if(product.category === "women's clothing" && check["women's clothing"] && product.price <= maxPrice) return true; 
                      if(product.category === "electronics" && check.electronics && product.price <= maxPrice) return true;
                       if(product.category === "jewelery" && check.jewelery && product.price <= maxPrice) return true;
                       return false
                  })
                  setCheckedProducts(checkFiltered)
               }
            }, [check,products,maxPrice])

         const handleSearch = () => {
            if(searchValue===''){
               setSearchProduct(originalProduct)
            }
         else{ const filteredProducts =
           searchProduct.filter((product)=>product.title.toLowerCase().includes(searchValue .toLowerCase()))
           setSearchProduct(filteredProducts)
          }
         }
         const handleInputChange = (e) => {
            setSearchValue(e.target.value)
         }
         const handleProductClick  = (products) => { 
            const existingProduct = cart.find(item => item.id === products.id);
            if (existingProduct) {
              const updatedCart = cart.map(item => {
                if (item.id === products.id) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              });
              setCart(updatedCart);
            } else {
              setCart([...cart, { ...products, quantity: 1 }]);
            }
         }
        const updateQuantity = (productId,quantity) =>{
         setCart(cart.map((item)=>(item.id === productId ? {...item,quantity} : item)))
        }
        const removeFromCart= (productId) => {
         setCart(cart.filter((item)=> item.id !== productId))
        }
         const handlePriceRange = (event) =>{
            setMaxPrice(event.target.value)
         }
        
         const handleChecked = (e) => {
            setCheck({
               ...check, [e.target.name]: e.target.checked
            })
         }
         const priceCheckProducts = products.filter((product)=> {
            if(check[product.category] && product.price <= maxPrice){
               return true
            }
           return false
         })

     return(
         <productsContext.Provider value={{products,searchProduct,searchValue,men,women,electric,jewelery,handleInputChange,handleSearch,handleChecked,check,priceCheckProducts,cart,setCart,handleProductClick,maxPrice,handlePriceRange,checkedProducts,removeFromCart,updateQuantity}}>
            {props.children}
         </productsContext.Provider>
        
     )  

}