import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from "../products.json"
import ProductCards from './ProductCards'
import  Pagination  from "../Shop/Pagination"
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tags from './Tags'

const showResults = "Showing 01 - 12 of 139 results"

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data)


    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 12;

    const indexOfLastProduct= currentPage * productPerPage;
    const indexOfFirstProduct= indexOfLastProduct - productPerPage;
     const currentProducts= products.slice(indexOfFirstProduct, indexOfLastProduct);

     // function to change the current page
     const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber);
     }

     //filter products based on category]
      const [selectedCategory,setSelectedCategory]=useState("All")
        const menuItems=[...new Set(Data.map((val)=>val.category))];

        const filterItems=(curcat)=>{
            const newItem=Data.filter((newVal)=>{
                return newVal.category===curcat;
            })
            setSelectedCategory(curcat);
            setProducts(newItem);
        }

    return (
        <div>
            <PageHeader title="Our Shop Page" currPage="Shop" />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout and title  here*/}
                                <div className="shop-title flex-wrap justify-content-between">
                                    <p>{showResults}</p>
                                    <Search products={products} GridList={GridList}/>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>

                                {/* product cards */}
                                <div>
                                    <ProductCards GridList={GridList} products={currentProducts} />
                                </div>
                                <Pagination 
                                productPerPage={productPerPage}
                                totalProducts={products.length}
                                paginate={paginate}
                                activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                           <aside>
                           
                            <ShopCategory
                            filterItems={filterItems}
                            setItem={setProducts}
                            menuItems={menuItems}
                            setProducts={setProducts}
                            selectedCategory={selectedCategory}
                            />
                            <PopularPost/>
                            <Tags/>
                           </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop