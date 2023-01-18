import React from 'react'
import Products from '../products/Products'
import './home.css'

function Home() {
  return (
    <div className="homepage">
        <div className="homepage_container">
            {/* use img to show banner.jpg in folder*/}
            {/* <img className='banner' src='https://m.media-amazon.com/images/I/61W-QJozfgL._SX3000_.jpg' alt='amz'/> */}
            <img className='banner' src="https://raw.githubusercontent.com/PD-Patel/amazon-clone-frontend/main/public/banner.jpg" alt=""/>
            {/* <img src="https://ik.imagekit.io/amazon1234/1348517_in_prime_2_pd_3000x1200_Eng._CB663273097_.jpg_WGa3rCkj2.png?updatedAt=1627118744997" alt='ad1'/> */}

            <div className="product_row">
                <Products id="5351788" title={"Beats Solo3 Headphones"} price={89.99} rating={5} image="https://m.media-amazon.com/images/I/51QxA-98Q+L._AC_UL480_QL65_.jpg"/>
                <Products id="5351253" title={"Logitech MK270 Wireless Keyboard And Mouse Combo"} price={39.99} rating={4} image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL480_FMwebp_QL65_.jpg"/>
                <Products id="5351893" title={"Texas Instruments TI-84 Plus CE Color Graphing Calculator, Black 7.5 Inch "} price={106.99} rating={5} image="https://m.media-amazon.com/images/I/71yrLllDokL._AC_UL480_FMwebp_QL65_.jpg"/>
            </div>
            <div className="product_row">
                <Products id="5351232" title={"SAMSUNG 32-Inch Class QLED Q60A Series - 4K UHD Dual LED "} price={479.99} rating={5} image="https://m.media-amazon.com/images/I/71G6eW8H8hL._AC_UY327_FMwebp_QL65_.jpg"/>
                <Products id="5351879" title={"ASUS ZenBook 14 Ultra-Slim Laptop 14” FHD Display"} price={999.99} rating={5} image="https://m.media-amazon.com/images/I/81DkONvgRVL._AC_UY327_FMwebp_QL65_.jpg"/>
            </div>
            <div className="product_row">
              <Products id="53576473" title={"JBL Tune 130NC TWS True Wireless In-Ear Noise Cancelling Headphones - White"} price={99.95} rating={5} image="https://m.media-amazon.com/images/I/41kjLVMaDgL._AC_AA180_.jpg"/>
            </div>
        </div>
    </div>
  )
}


export default Home
