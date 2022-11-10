import React from "react";
import "../styles/firstsection.css";

const FirstSection = () => {
  return (
    <>
      <div className="container1">
        <div className="row">
          <div className="header">
            <div className="col-sm-6 headerInfo" data-aos="fade-right">
              <h1 className="headerfirsth1">Realize Your Full Potential</h1>
              <div className="headerP">
                <p>
                  We help our clients make realize their most important business
                  goals.
                </p>
              </div>
              <div className="span">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ucliq_customer&gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start Now
                </a>
              </div>
            </div>
            <div className="col-sm-6 headerImage" data-aos="fade-left">
              {/* <img
              src="https://res.cloudinary.com/antrix/image/upload/v1665591651/istockphoto-1263975117-612x612_yutcrz.jpg"
              alt="careerimage"
              className="headerImage1"
            /> */}
            </div>
            <div className="secondImage">
              {/* <div className='secImage'>
                <img src="https://previews.123rf.com/images/laboko/laboko1805/laboko180500089/101334283-meat-of-fresh-chicken-shin-isolated-on-white.jpg?fj=1" alt="smallImage"/>
              </div> */}
              {/* <div className="info">
              <h5>Fresh Chicken</h5>
              <h2>$44.50</h2>
              <p>Fresh Shipping</p>
            </div> */}
              <div className="cart">
                <i
                  class="fas fa-cart-plus"
                  style={{ fontSize: "20px", color: "white" }}
                ></i>
              </div>
              <div className="alarm">
                <i
                  class="fa fa-clock-o"
                  style={{ fontSize: "48px", color: "green" }}
                ></i>
                <h5>Delivery</h5>
                <p>30 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
