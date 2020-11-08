import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean StartUp:How Constant Innovation Creates Radically Sucessful Business Paperback"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903852"
            title="Tinwoo Smart Watch for Android / iOS Phones, Health Tracker with Heart Rate Monitor"
            price={62.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61E5YNbNXqL._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81CwzgotbCL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9 inch,Wi-Fi,128GB) -Silver (4th Generation)"
            price={598.9}
            image="https://images-na.ssl-images-amazon.com/images/I/61GrEskUMAL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.0}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
