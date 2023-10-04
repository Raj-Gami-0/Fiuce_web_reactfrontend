import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Fruts_sec = () => {
    return (
        <div>
            <section>
                <div className='container1 '>
                    <div className="row g-3 
                    ">
                        <div className="col-md-4 ">
                            <div className='position-relative'>
                                <div className='raj '>
                                    <img src={require('./image/asset 18.jpeg')} alt="" className="img-fluid img_size w-100" />
                                </div>
                                <div className='banner-content'>
                                    <p className='top_class'>UP TO 30% OFF</p>
                                    <h3>Fresh Fruit</h3>
                                    <a href="#"> Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 raj ">
                            <div className="row main_box mb-3 g-3">
                                <div className="col-xl-4 col-lg-6 ">
                                    <div className="box_boder">
                                        <div className=''>
                                            <img src={require('./image/asset 19.jpeg')} alt="" className="img-fluid " />
                                        </div>
                                        <div className='item-title'>
                                            <a href="#">Peach</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 d-lg-block d-none ">
                                    <div className="box_boder">
                                        <div>
                                            <img src={require('./image/asset 20.jpeg')} alt="" className="img-fluid" />
                                        </div>
                                        <div className='item-title'>
                                            <a href="#">Lemons</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-none d-xl-block ">
                                    <div className="box_boder">
                                        <div>
                                            <img src={require('./image/asset 21.jpeg')} alt="" className="img-fluid" />
                                        </div>
                                        <div className='item-title'>
                                            <a href="#">Passion Fruit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row main_box mb-3 g-3">
                                <div className="col-xl-4 col-lg-6">
                                    <div className="box_boder">
                                        <div>
                                            <img src={require('./image/asset 22.jpeg')} alt="" className="img-fluid" />
                                        </div>
                                        <div className='item-title'>
                                            <a href="#">Mulberry</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 d-lg-block d-none ">
                                    <div className="box_boder">
                                        <div>
                                            <img src={require('./image/asset 23.jpeg')} alt="" className="img-fluid" />
                                        </div>
                                        <div className='item-title'>
                                            <a href="#">Strawberry</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-none d-xl-block ">
                                    <div className="box_boder">
                                        <div>
                                            <img src={require('./image/asset 24.jpeg')} alt="" className="img-fluid" />
                                        </div>
                                        <div className='item-title'>
                                            <a href="#">Pomegranate</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Fruts_sec;
