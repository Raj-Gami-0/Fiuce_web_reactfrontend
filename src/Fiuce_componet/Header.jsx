import React, { useEffect, useState } from 'react';
import logo from './image/asset 0.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import * as mv from 'react-bootstrap';
import { BsSearch, BsFillPersonFill, BsFillHeartFill, BsBag, BsFillPersonBadgeFill } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import axios from 'axios';
import Home from './Home';

const Navbar = () => {
    const [search, setSearch] = useState(false);
    const [cartdata, setCartdata] = useState(''); // Fix the useState call
    const { id } = useParams();

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:2200/cart/get/${id}`, {
                    headers: {
                        Authorization: token,
                    },
                });
                const cartDataLength = response.data.cart_data.length;
                setCartdata(cartDataLength);
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };

        fetchData();
    }, [id, token]);

    return (
        <>
            <div className={`search ${search ? "active" : ""}`}>
                <h1 className='p-5'>Start typing and hit Enter</h1>
                <input type="Search" placeholder='Search Here' />
                <span className='ico'><BsSearch></BsSearch></span>
            </div>
            <section className='bg-dark text-white background'>
                <mv.Container fluid>
                    <mv.Row className=''>
                        <div className="header align-items-center d-flex py-4 px-3">
                            <mv.Col md={4} sm={3} className='rightmanu'>
                                <div className="menuicon">
                                    <button type="button" className='btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><span><AiOutlineMenuUnfold ></AiOutlineMenuUnfold></span></button>

                                    {/* ... (rest of your offcanvas code) */}

                                </div>
                            </mv.Col>
                            <mv.Col lg={2} md={4} sm={6}>
                                <div className="logoh">
                                    <img src={logo} alt="" />
                                </div>
                            </mv.Col>
                            <mv.Col lg={8} className='align-items-center heading'>
                                <ul className='d-flex justify-content-center mb-0 fw-bolder ps-0 h-100 menu'>

                                    <Link to={'/'}>
                                        <li className='px-4'><span>Home</span></li>
                                    </Link>
                                    <Link to={'/Add_product'}>
                                        <li className='px-4'><span>Shop</span></li>
                                    </Link>
                                    <Link to={'/seller'}>
                                        <li className='px-4'><span>Featured</span></li>
                                    </Link>
                                    <Link to={'/Show_product'}>
                                        <li className='px-4'><span> product</span></li>
                                    </Link>
                                    <Link to={'/cart'}>
                                        <li className='px-4'><span>Cart</span></li>
                                    </Link>
                                    <li className='px-4'><span>Pages</span></li>
                                    <li className='px-4'><span>Blogs</span></li>
                                </ul>
                            </mv.Col>
                            <mv.Col lg={2} md={4} sm={3} className='icons'>
                                <ul className='d-flex fs-5 justify-content-end ps-0 mb-0'>
                                    <li className='list-inline-item me-2 ico' data-bs-toggle="tooltip" data-bs-placement="top" title='Search'><span onClick={() => { setSearch(!search) }}><BsSearch></BsSearch></span></li>
                                    <li className='list-inline-item me-2 ico' data-bs-toggle="tooltip" data-bs-placement="top" title='Login'><Link to={'/Login'} className='text-white'><span><BsFillPersonBadgeFill></BsFillPersonBadgeFill></span></Link></li>
                                    <li className='list-inline-item me-2 ico sm-none' data-bs-toggle="tooltip" data-bs-placement="top" title='Like'><span><BsFillHeartFill></BsFillHeartFill></span></li>
                                    <Link to={'/cart'}>
                                        <li className='list-inline-item me-4 ico sm-none text-white' data-bs-toggle="tooltip" data-bs-placement="top" title='Cart'><span><BsBag></BsBag></span></li>
                                        {/* <span>{cartdata}</span> */}
                                    </Link>
                                </ul>
                            </mv.Col>
                        </div>
                    </mv.Row>
                </mv.Container>
            </section>
        </>
    );
};

export default Navbar;
