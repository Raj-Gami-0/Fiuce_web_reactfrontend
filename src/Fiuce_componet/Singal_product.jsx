import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const SingleProduct = () => {
    const [single, setSingle] = useState({});
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [model, setModel] = useState(false);

    const handleClose = () => {
        setModel(false);
    }

    useEffect(() => {
        axios
            .get(`http://localhost:2200/single/${id}`)
            .then(function (response) {
                console.log(response.data.single_data);
                setSingle(response.data.single_data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

    const handleThumbClick = (newThumb) => {
        setSingle((prevSingle) => ({ ...prevSingle, thumb: newThumb }));
    };

    var token = localStorage.getItem('token');

    const handleAddToCart = async (single) => {
        const productId = single._id;
        const title = single.name;
        const image = single.thumb;
        const price = single.price;

        const obj = {
            userId: productId,
            name: title,
            price: price,
            thumb: image,
            quantity: 1
        }

        // alert('ssss')
        try {
            const response = await axios.post('http://localhost:2200/cart/', obj, {
                headers: {
                    Authorization: token
                }
            });
            console.log(response.data);

            if (response.data.status === 'Success' || response.data.status === 'cart updated') {
                fetchCartData();
                setModel(true);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            setModel(false);
        }
    }

    const fetchCartData = async () => {
        const response = await axios.get(`http://localhost:2200/cart/get/${id}`, {
            headers: {
                Authorization: token
            }
        });

        console.log(response.data.cart_data.length);
    }

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const qtyMinus = () => {
        handleQuantityChange(quantity - 1);
    };

    const qtyPlus = () => {
        handleQuantityChange(quantity + 1);
    };

    return (
        <div>
            <Container className='mt-3'>
                <Row>
                    <Col lg={7} md={7}>
                        <div>
                            <div className='position-relative'>
                                <div className='box_img'>
                                    <img src={single.thumb} alt="" />
                                </div>
                            </div>
                        </div>
                        {single.images &&
                            single.images.map((img, index) => (
                                <div key={index} className='raj10'>
                                    <img
                                        src={img}
                                        alt=""
                                        className=''
                                        onClick={() => handleThumbClick(img)}
                                    />
                                </div>
                            ))}
                    </Col>
                    <Col lg={5} md={5}>
                        <div className='text_box'>
                            <div className='position-relative'>
                                <h2 className='title'>{single.name}</h2>
                                <div>
                                    <ins>{single.price}</ins>
                                </div>
                                <div className='box_boder1'></div>
                                <div className='box_sold'>
                                    <p>{single.desc}</p>
                                </div>
                                <p className='random_product'>
                                    <span>7</span> sold in the last <span>20</span> hours
                                </p>
                                <div className='my-4'>
                                    <div className='bode'>
                                        <a href="#">Size Guide</a>
                                        <a href="#">Delivery & Return</a>
                                        <a href="#">Ask a Question</a>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='qty'>
                                        <button type='button' onClick={qtyMinus} className='qtymins'>-</button>
                                        <input
                                            type="text"
                                            value={quantity}
                                            readOnly
                                            className='intname'
                                        />
                                        <button type='button' onClick={qtyPlus} className='qutplus'>+</button>
                                    </div>
                                    <div>
                                        <button type='button' className='addbtn' onClick={() => handleAddToCart(single)}>Add To Cart</button>
                                    </div>
                                </div>
                                <div>
                                    <button className='buybtn'>buy it now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Modal show={model} onHide={handleClose}>
                    <Modal.Body> Add to Cart successfully</Modal.Body>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal>
            </Container>
        </div>
    );
};

export default SingleProduct;
