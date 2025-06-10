import { createContext,useEffect,useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider =(props) => {

const currency='₹';
const delivery_fee=100;
const [search,setSearch]=useState('');
const [showSearch,setShowSearch]=useState(false);
const [cartItems,setCartItems]=useState({});
const navigate=useNavigate();


const addToCart = async (itemId,size) =>{

    if(!size)
    {
       toast.error('Please select a size!', {
      position: "top-center",
      autoClose: 2000,           // 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",          // or "dark"/"light"
    });
    return;
    }
    toast.success('Product added successfully!', {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "colored",
  });


    let cartData= structuredClone(cartItems);

    if(cartData[itemId])
    {
        if(cartData[itemId][size])
        {
            cartData[itemId][size]+=1;
        }
        else
        {
            cartData[itemId][size]=1;
        }
    }
    else
    {
        cartData[itemId]={};
        cartData[itemId][size]=1;
    }
    setCartItems(cartData);

}

    const getCartAmount = () => {
  let totalAmount = 0;
  for (const items in cartItems) {
    let itemInfo = products.find((product) => product._id === items);
    if (!itemInfo) continue;

    for (const item in cartItems[items]) {
      const quantity = cartItems[items][item];
      if (quantity > 0) {
        totalAmount += itemInfo.price * quantity;
      }
    }
  }
  return totalAmount;
};


  const getCartCount = () => {
    let totalCount=0;
    for(const items in cartItems){
        let itemInfo=products.find((product)=>product._id === items);
        for(const item in cartItems[items])
        {
            try{
                if(cartItems[items][item] > 0)
                {
                    totalCount += cartItems[items][item];
                }
            }
            catch(error)
            {

            }
        }
    }
    return totalCount;
  }

  const updateQuantity =async (itemId,size,quantity)=>{

    let cartData=structuredClone(cartItems);
    cartData[itemId][size]=quantity;

    setCartItems(cartData)
   
  }


    const value={
          products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,
          cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;