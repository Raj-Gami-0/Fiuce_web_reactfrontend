import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

import { MdDelete } from 'react-icons/md';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get('http://localhost:2200/cart/all', {
                headers: {
                    Authorization: token,
                },
            })
            .then(function (response) {
                setCart(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        setSubtotal(total);
    }, [cart]);

    const handleDelete = (id) => {
        const token = localStorage.getItem('token');
        axios
            .delete(`http://localhost:2200/cart/delete/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
            .then(function (response) {
                // if (response.data.status === "success") {
                    setCart(cart.filter(item => item._id !== id));
                // }
                console.log(response.data.data)
                // Refresh the cart by fetching updated data
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <Container fluid className='mt-4'>
                <Table bordered >
                    <thead className='text-center'>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr className='text-center'>
                                <td><img src={item.thumb} className='cartimg' alt="" /></td>
                                <td><div className="product_name">{item.name}</div></td>
                                <td><div className="no_item">{item.quantity}</div></td>
                                <td><div className="Cart_price">{item.price * item.quantity}</div></td>
                                <td><button className='btn' onClick={() => handleDelete(item._id)}><MdDelete /> </button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="card  ">
                    <div className="card-header mt-3  border-0 rounded-0">
                        <h6 className=" "> CART TOTALS </h6>
                    </div>

                    <div className="card-footer bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="fw-bold">Total</h5>
                            <h5 className="fw-bold">${subtotal.toFixed()}</h5>
                        </div>
                        <button className="btn btn-block proceed my-3 py-3 btn-outline-dark w-100 rounded-0">
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;
