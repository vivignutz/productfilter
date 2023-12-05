import React, { useState } from 'react'
import Product from '../Product.json'


export default function Productfilter() {
    const [items, setItems] = useState(Product);
    console.log(items)

    const filterItems = (catItem) => {
        const updateItems = Product.filter((curItem) => {
            return curItem.category === catItem
        });
        setItems(updateItems);
    }

    return (
        <div className='container mt-5'>
            <h1>All products</h1>
            <button type="button" class="btn btn-success me-3" onClick={() => setItems(Product)}>All Products</button>
            <button type="button" class="btn btn-success me-3" onClick={() => filterItems("women's clothing")}>Women's Clothing</button>
            <button type="button" class="btn btn-success me-3" onClick={() => filterItems("men's clothing")}>Men's Clothing</button>
            <button type="button" class="btn btn-success me-3" onClick={() => filterItems("jewelery")}>Jewelery</button>
            <button type="button" class="btn btn-success me-3" onClick={() => filterItems("electronics")}>Electronics</button>

            <hr />
            <div className='row justify-content-center'>
                {items.map((val)=>(
                    <div className = 'col-md-3'>
                        <div class="card">
                            <img src={val.image} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body">
                                <h5>{val.title.substring(0,18)} <span class="badge bg-primary">{val.category}</span></h5>
                                
                                </div>
                        </div>                                            
                    </div>
                ))}
            </div>
        </div>
    )
}