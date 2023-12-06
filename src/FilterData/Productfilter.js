import React, { useState } from 'react'
import Product from '../Product.json'


// Principal component to filter and show products
export default function Productfilter() {
    const [items, setItems] = useState(Product);
    console.log(items)

    // Filter by category
    const filterItems = (catItem) => {
        const updateItems = Product.filter((curItem) => {
            return curItem.category === catItem
        });
        setItems(updateItems);
    }

    // Buttons as a filter
    return (
        <div className='container mt-5'>
            <h1>All products</h1>
            <button type="button" className="btn btn-success me-3" onClick={() => setItems(Product)}>All Products</button>
            <button type="button" className="btn btn-success me-3" onClick={() => filterItems("women's clothing")}>Women's Clothing</button>
            <button type="button" className="btn btn-success me-3" onClick={() => filterItems("men's clothing")}>Men's Clothing</button>
            <button type="button" className="btn btn-success me-3" onClick={() => filterItems("jewelry")}>Jewelry</button>
            <button type="button" className="btn btn-success me-3" onClick={() => filterItems("electronics")}>Electronics</button>

            <hr />
            {/* Show filtered items */}
            <div className='row justify-content-center'>
                {items.map((val, index)=>(
                    <div key={index} className='col-md-3'>
                        <div className="card">
                            <img src={val.image} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">

                                {/* Product title has max. 18 characters */}
                                    <h5>{val.title.substring(0,18)} <span className="badge bg-primary">{val.category}</span></h5>
                                </div>
                        </div>                                            
                    </div>
                ))}
            </div>
        </div>
    )
}