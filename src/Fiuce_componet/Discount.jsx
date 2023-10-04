import React from 'react'

const Discount = () => {
    return (
        <div>
            <div>
                <div className="col-lg-4">
                    <div className='item'>
                        <div className='banner_thumb'>
                            <a href="#">
                                <img src={require('./image/asset 23.jpeg')} alt="" />
                            </a>
                        </div>
                        <div class="banner-info">
                            <div class="banner-info-inner">

                                <h6 class="title" >20% off all</h6>


                                <h3 class="bigtitle" >Apple</h3>


                                <a href="#" class="button " tabindex="0">Shop now</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount
