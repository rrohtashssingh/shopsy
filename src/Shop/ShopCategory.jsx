import React from 'react'
import Data from "../products.json"
const ShopCategory = ({filterItems,setItem,menuItems,setProducts,selectedCategory}) => {
  return (
    <div className='widget-header'>
        <h5 className='ms-2'>
            All Categories
        </h5>
        <div>
            <button onClick={()=>setProducts(Data)} className={`m-2 ${selectedCategory=== "All" ? "bg-warning" : ""}`}>
                All
            </button>
            {
                menuItems.map((val,id)=>{
                    return (
                        <button className={`m-2 ${selectedCategory=== val ? "bg-warning" : ""}`} key={id} onClick={()=>filterItems(val)}>
                            {val}
                        </button>
                    )
                })
            }
        </div>

    </div>
  )
}

export default ShopCategory