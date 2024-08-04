import React from 'react'
import "./productList.css"
import Product from '../product/Product'
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className='pl w-full p-4'>
        <div className="pl-texts flex flex-col gap-0 mt-[20px]">
            <h1 className="pl-title text-[25px] sm:text-4xl -sm:pt-50 pt-6">Create & inspire. Its Owo</h1>
            <p className="pl-desc">
                Below are image-links to a few of my projects!
            </p>
        </div>
        <div className="pl-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-1">
            {products.map((item) =>
            <Product className="pl-listNext" key={item.id} img={item.img} link={item.link}/>
            )}
        </div>
    </div>
  )
}

export default ProductList