import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const Add_product = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rate, setRate] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name: productName.toUpperCase(),
            desc: description.toUpperCase(),
            category: category.toUpperCase(),
            price: price.toUpperCase(),
            rate: rate.toUpperCase(),
            thumb: thumbnail,
            images: images,
        }

        axios.post('http://localhost:2200/', obj)
            .then(response => {
                console.log(response);
                if (response.data.status === 'Success') {
                    alert("Product Added Successfully");
                } else {
                    alert("Error in Adding Product");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className='login1 mt-3'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className='mt-3'>
                                    <label htmlFor="productName" className="form-label">Product Name</label><br />
                                    <input className='email' type="text" onChange={(e) => setProductName(e.target.value)} placeholder='Product name...' name="productName" />
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="description" className="form-label">Description</label><br />
                                    <input className='email' type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Product Description...' name="description" />
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="category" className="form-label">Category</label><br />
                                    <input className='email' type="text" onChange={(e) => setCategory(e.target.value)} placeholder='Product Category...' name="category" />
                                </div>
                                <div className='d-flex'>
                                    <div className='mt-3 '>
                                        <label htmlFor="price" className="form-label">Price</label><br />
                                        <input className='email2' type="text" onChange={(e) => setPrice(e.target.value)} placeholder='Product Price...' name="price" />
                                    </div>
                                    <div className='mt-3 '>
                                        <label htmlFor="rate" className="form-label">Rate</label><br />
                                        <input className='email3' type="text" onChange={(e) => setRate(e.target.value)} placeholder='Product Rate..' name="rate" />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="thumbnail" className="form-label">Thumbnail</label><br />
                                    <input className='email' type="text" onChange={(e) => setThumbnail(e.target.value)} placeholder='Thumbnail Images Link...' name="thumbnail" />
                                </div>
                                <div className='mt-3'>
                                    <label htmlFor="images" className="form-label">Images</label><br />
                                    <input className='email' type="text" onChange={(e) => setImages(e.target.value.split(','))} placeholder='Product Images Link...' name="images" />
                                </div>
                            </div>
                            <button type="submit" className='mt-4 bata1'>Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add_product;
