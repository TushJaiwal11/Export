import React from "react";

const Products = () => {
  return (
    <div className="module">
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
            <a href="/ginger" className="read-more">
              Read More
            </a>
          </div>



          <div className="product-card">
            <img src="/images/mazie.png" alt="Product 3" />
            <h3>Maize</h3>
            <p>
              Maize is known as corn. Fresh yellow maize available in pack in pp bag 45kg to 60kg/ loose.The leafy stalk produces ears which contain the grain,which are seeds called Kernals.
            </p>
            <a href="/mazie" className="read-more">
              Read More
            </a>
          </div>


        </div>
      </div>
      {/* Products Section */}
    </div>
  );
};

export default Products;
