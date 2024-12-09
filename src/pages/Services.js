import React from "react";
import '../css/service.css';
import '../css/product.css';


const Services = () => {
  const tagStyle = {
    display: "inline-block",
    backgroundColor: "#f0f0f0",
    margin: "5px 5px 0 0",
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "0.9em",
  };
  return (
    <div className="module">
      <div className="product-page">
        <div className="about-banner">
          <h1> Services </h1>
        </div>
        <div style={{ display: "flex", padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
          {/* Main Content */}
          <div style={{ flex: "3", marginRight: "20px" }}>
            {/* Skilled Labour Section */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px", alignItems: "flex-start" }}>
              <img
                src="/service/labour.png"
                alt="Skilled Labour"
                style={{ maxWidth: "200px", borderRadius: "5px" }}
              />
              <div>
                <h2>Skilled Labour</h2>
                <p>
                  We have skilled and experienced labour team available for packing, grading, and
                  processing of products so that it helps in sorting products as per the grades, size,
                  shape, colour, and volume to maintain national and international standards.
                </p>
              </div>
            </div>

            {/* Excellent Storage Capacity Section */}
            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <img
                src="/service/storage.png"
                alt="Excellent Storage Capacity"
                style={{ maxWidth: "200px", borderRadius: "5px" }}
              />
              <div>
                <h2>Excellent Storage Capacity</h2>
                <p>
                  We have huge and comfortable storage capacity. Around 400 tons available for storage
                  for onion and garlic as it may cause deterioration of both their flavor and nutrition
                  profile.
                </p>
                <p>
                  Proper storage of fresh products and vegetables is important to maintain the integrity
                  of the product, prevent spoilage and illness, and ensure that you get the best value
                  for your purchasing dollar.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ flex: "1", borderLeft: "1px solid #ddd", paddingLeft: "20px" }}>
            {/* Quick Section */}
            <div>
              <h3>Quick</h3>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                <li style={{ marginBottom: "10px" }}>▶ Efficient Workforce</li>
                <li style={{ marginBottom: "10px" }}>▶ Timely Delivery</li>
                <li style={{ marginBottom: "10px" }}>▶ Competitive Prices</li>
                <li style={{ marginBottom: "10px" }}>▶ Quality Products</li>
                <li style={{ marginBottom: "10px" }}>▶ High-grade Packaging</li>
                <li style={{ marginBottom: "10px" }}>▶ Ethical Business Policies</li>
                <li style={{ marginBottom: "10px" }}>▶ Competitive Pricing</li>
              </ul>
            </div>

            {/* Tags Section */}
            <div style={{ marginTop: "30px" }}>
              <h3>Tags</h3>
              <div>
                <span style={tagStyle}>Onion</span>
                <span style={tagStyle}>Exporter</span>
                <span style={tagStyle}>India</span>
                <span style={tagStyle}>Dubai</span>
                <span style={tagStyle}>Oman</span>
                <span style={tagStyle}>Kuwait</span>
                <span style={tagStyle}>Saudi</span>
                <span style={tagStyle}>Srilanka</span>
                <span style={tagStyle}>Malaysia</span>
                <span style={tagStyle}>Singapre</span>
                <span style={tagStyle}>Wholesaler</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
