import React from "react";

const Home = () => {
  return (
    <div className="module">
      {/* <h2>Welcome to Jain Export</h2>
      <p>Your trusted partner for world-class quality products.</p> */}



      {/* Image Slider */}
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src="/images/red.jpeg" alt="Slide 1" />
          </div>
          <div className="slide">
            <img src="/images/orange.jpeg" alt="Slide 2" />
          </div>
        </div>
      </div>
      {/* Image Slider */}

      {/* About in Home  */}
      <div className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src="/images/onions.png" alt="Onions" />
          </div>
          <div className="about-text">
            <h3>About</h3>
            <h2>Supermoon Traders</h2>
            <p>
              fully integrated and a professionally managed firm. We have been recognized as prominent
              exporter, trader and supplier for widest range of agro products. Although we cover a huge array
              of agro products, onion, maize and garlic are our prime products. These products are procured
              from reliable farmers of the industry.
            </p>
            <p>
              fOur real font of inspiration is our business integrity and crystal clear dealings with our
              huge client base support which are located over a number of countries. We have successfully
              served our business all over India, Dubai, Oman, Kuwait, Saudi (Gulf Countries), Srilanka,
              Malaysia, Singapre, Indonesia, Philippines, Vietnam (Far East) and World Wide.
            </p>
            <a href="/about" className="read-more">
              Read More
            </a>
          </div>
        </div>
      </div>
      {/* About in Home */}

      {/* Products Section */}
      <div className="products-section">
        <h2>Our Products</h2>
        <br></br>
        <div className="product-cards">
          <div className="product-card">
            <img src="/images/singleOnion.png" alt="Product 1" className="onion-image" />
            <h3>Onions</h3>
            <p>
              This is our most striking product which is cultivated using the best quality seeds and latest processing techniques in complete accordance with the set international standards. With the help of our professionals, we are able to trade, export, wholesale and supply Red Mesh bags and jute Packing Onion. We provide red onion of small size, medium size and big size onion.
            </p>
            <a href="/onion" className="read-more">
              Read More
            </a>
          </div>

          <div className="product-card">
            <img src="/images/ginger.png" alt="Product 2" />
            <h3>Ginger</h3>
            <p>

              Anti-inflammatory and antioxidant properties: Ginger contains bioactive compounds such as gingerol, which has powerful anti-inflammatory and antioxidant effects.
              Digestive Aid: Ginger is commonly used to relieve nausea, indigestion, and bloating. It is particularly effective in treating morning sickness during pregnancy and nausea caused by chemotherapy or motion sickness.
              Pain Relief: Ginger has been shown to reduce muscle pain and soreness, often used by athletes or those suffering from arthritis.

            </p>
            <a href="/maize" className="read-more">
              Read More
            </a>
          </div>



          <div className="product-card">
            <img src="/images/mazie.png" alt="Product 3" />
            <h3>Maize</h3>
            <p>
              Maize is known as corn. Fresh yellow maize available in pack in pp bag 45kg to 60kg/ loose.The leafy stalk produces ears which contain the grain,which are seeds called Kernals.
            </p>
            <a href="/garlic" className="read-more">
              Read More
            </a>
          </div>


        </div>
      </div>
      {/* Products Section */}


      {/* Achivment  */}
      <div className="achievement-container">
        <div className="achievement-text">
          <h1>Achievements</h1>
          <h2>Son Of Soil</h2>
          <p>
            Award by Hon'ble Minister of Agriculture India Sh. Sharad Pawar to Sh.
            Manoj Jain
          </p>
        </div>
        <div className="achievement-image">
          <img src="/images/pawar.png" alt="Son of Soil Award" />
        </div>
      </div>
      {/* Achivment  */}

      {/* Onion Sorting Machine Section */}
      <div className="onion-sorting-container">
        <div className="onion-text">
          <h2>Onion Sorting Machine</h2>
          <hr className="custom-line" />
          <p>
            At Jain Export we sort onions by automatic onion Size Sorting machine.
            This machine sorts onions into different sizes.
          </p>
        </div>
        <div className="onion-image">
          <img src="/images/machine.png" alt="Onion Sorting Machine" />
        </div>
      </div>


      {/* News Section */}
      <div className="news-section">
        <div className="news-container">
          <div className="news-item">
            <img src="/images/news1.png" alt="News 1" className="news-image" />
            {/* <a href="#" className="read-more">Read More</a> */}
          </div>

          <div className="news-item">
            <img src="/images/news2.png" alt="News 2" className="news-image" />
            {/* <a href="#" className="read-more">Read More</a> */}
          </div>

          <div className="news-item">
            <img src="/images/news3.png" alt="News 3" className="news-image" />
            {/* <a href="#" className="read-more">Read More</a> */}
          </div>
        </div>
      </div>

      {/* News Section  */}



    </div>


  );
};

export default Home;
