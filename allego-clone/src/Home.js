import React from 'react'
import "./Home.css"
import Product from "./Product"



function Home() {
    return (
        <div className='home'>
           
            <img className='home__banner' src='https://m.media-amazon.com/images/I/41wIC81INQL._SX1500_.jpg' alt=""></img>
            <div className='home__products'>
                
                   
                <Product 
                    id ={123454}
                    title= "MITOLOGIA SŁOWIAŃSKA"
                    price={26.38}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51-iGc9emjL._SX330_BO1,204,203,200_.jpg" 
                /> 
                <Product id={213722}
                    title="Microsoft Xbox Series S 512GB Konsola Biała"
                    price={1348.00}
                    rating= {5}
                    image="https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SL1500_.jpg"
                />
                <Product id={731233}
                    title="Graef G50 Krajalnica Uniwersalna, Metal, 170 W, Czarny/Szary "
                    price={367.84}
                    rating= {5}
                    image="https://m.media-amazon.com/images/I/71IK0IuADeL._AC_SL1500_.jpg"
                />
                 <Product id={123444}
                    title={`Crucial MX500 2TB CT2000MX500SSD1 do 560 MB/s (3D NAND, SATA, 2,5", Internal SSD)`}
                    price={799.00}
                    rating= {3}
                    image="https://m.media-amazon.com/images/I/81rg-38AdJL._AC_SL1500_.jpg"
                />
                <Product id={123466}
                    title="Gigabyte Karta graficzna AORUS GeForce RTX 3090 XTREME 24 GB" 
                    price={17851.05}
                    rating= {4}
                    image="https://m.media-amazon.com/images/I/71Ljxc0fKVL._AC_SL1500_.jpg"
                />
                <Product id={321647}
                    title="Gra planszowa Wsiąść do Pociągu: Europa" 
                    price={123.67}
                    rating= {5}
                    image="https://m.media-amazon.com/images/I/81HWG1wcFlL._AC_SL1100_.jpg"
                />

            </div>
        </div>
    )
}

export default Home
