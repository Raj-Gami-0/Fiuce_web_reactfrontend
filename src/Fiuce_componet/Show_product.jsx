    import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Don't forget to import axios
import { Col, Row } from 'react-bootstrap';
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ShowProduct = () => {
    const token = localStorage.getItem('token');
    const [viewCourse, setViewCourse] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:2200/all', {
                headers: {
                    Authorization: token,
                },
            })
            .then(function (response) {
                console.log(response.data.data);
                setViewCourse(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [token]);

    return (
        <div>
            <ul>
                <Row className='m-0'>
                    <Col lg={12}>
                        <div className="after">
                            <h3 className="tital text-uppercase text-center">best seller</h3>
                            <p className='pt-3 text-center mb-0'>Best Seller Product This Week!</p>
                        </div>
                    </Col>
                </Row>
                    <Row className='m-0'>
                        {viewCourse.map((product, index) => (
                            <Col lg={3} >
                                <li key={index}>
                                    <Link to={`/Singal_product/${product._id}`}>
                                        <div className="Fruit">
                                            <img src={product.thumb} alt="" />
                                            <div className="inerr">
                                                <img src={product.images} alt="" />
                                                <div className="content">
                                                    <ul className="social d-flex">
                                                        <li><span><BsBag></BsBag></span></li>
                                                        <li><span><BsSearch></BsSearch></span></li>
                                                        <li><span><AiOutlineHeart></AiOutlineHeart></span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h4 className='des-font text-center text-black'>{product.name}</h4>
                                            <p className='price text-center'>{product.price} </p>
                                        </div>
                                    </Link>
                                </li>
                            </Col>
                        ))}
                    </Row>
            </ul>
        </div>
    );
}

export default ShowProduct;
