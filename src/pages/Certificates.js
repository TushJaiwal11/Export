import React from "react";
import '../css/service.css';
import '../css/product.css';

const Certificates = () => {
  return (
    <div className="module">
      <div className="product-page">
        <div className="about-banner">
          <h1> Certificates </h1>
        </div>

      
        {/* News Section */}
        <div className="news-section">
          <div className="news-container">
            <div className="news-item">
              <img src="/service/certificate1.png" alt="News 1" className="news-image" />
              {/* <a href="#" className="read-more">Read More</a> */}
            </div>

            <div className="news-item">
              <img src="/service/certificate2.png" alt="News 2" className="news-image" />
              {/* <a href="#" className="read-more">Read More</a> */}
            </div>

            <div className="news-item">
              <img src="/service/certificate2.png" alt="News 3" className="news-image" />
              {/* <a href="#" className="read-more">Read More</a> */}
            </div>
          </div>
        </div>

        {/* News Section  */}



      </div>
    </div>
  );
};

export default Certificates;
