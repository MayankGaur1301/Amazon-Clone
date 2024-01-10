import React from "react";
import moviesBanner from "../assets/the-tomorrow-war-amazon-prime.jpg";
import "../components-css/home.css";
import { Link } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <Link
        className="prime_banner"
        to="https://www.primevideo.com/detail/0L8V88NU7CFYRKM857QDN2O5B4?ref_=dvm_pds_gen_in_kk_s_gt_SA_76826_mkw_sNyKqgXdN-dc&mrntrk=pcrid_648414304539_slid__pgrid_146695354552_pgeo_9301981_x__adext__ptid_kwd-1285443134341"
        target="blank"
      >
        <img src={moviesBanner} alt="amazon_prime" className="banner" />
      </Link>

      {/* product component here */}
      <div className="product_section">
        <div className="home_row">
          <Product
            id="1"
            title="Philips Home Theater System (5.1 multimedia speakers)"
            price="309"
            image="https://images.philips.com/is/image/PhilipsConsumer/HTD5570_94-IMS-en_IN?$jpglarge$&wid=1250"
            rating={5}
          />
             <Product
            id="2"
            title="ASUS Zenbook S 13 OLED (2023), Intel Core i7-1355U (13th Gen)"
            price="429"
            image="https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg"
            rating={4}
          />
         
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="LG 7 Kg with Touch panel Fully-Automatic"
            price="339"
            image="https://media3.bosch-home.com/Product_Shots/1600x900/15916994_WGA244ASIN_STP_def.png"
            rating={3}
          />
            <Product
           id="4"
           title="Sony PS5 PlayStation Console "
           price="250"
           image="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/03/Sony-PS5.png?fit=1088%2C612&ssl=1"
           rating={5}
         />
        <Product
            id="5"
            title="Apple iPad Pro (Wi-Fi, 256GB)-Silver "
            price="969"
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202212_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1667594383218"
            rating={5}
          />
       
          
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="Samsung 34-inch(86.4cm) LED 3440 x 1440 Pixels 2K WQHD, Curved Monitor, 21:9 Ultrawide, PBP, PIP, 100Hz, QLED, Thunderbolt 3 Port (LC34J791WTWXXL, Gray)"
            price="1969"
            image="https://www.solidsmack.com/wp-content/uploads/2017/06/title-3.jpg"
            rating={5}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
