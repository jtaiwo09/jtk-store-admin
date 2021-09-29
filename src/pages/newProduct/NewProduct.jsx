import React from 'react';
import './newProduct.scss';

const NewProduct = () => {
    return (
        <div className='newProduct'>
            <h1 className="newProductTitle">New Product</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label>Image</label>
                    <input type="file" />
                </div>
                <div className="newProductItem">
                    <label>Name</label>
                    <input type="text" placeholder='Prouct Name'/>
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder='500'/>
                </div>
                <div className="newProductItem">
                    <label>Active</label>
                    <select name="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className='newProductButton'>Create</button>
            </form>
        </div>
    )
}

export default NewProduct
