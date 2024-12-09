import React from "react";
import "../css/about.css";
const About = () => {
  return (
    <div className="module">
      <div className="about-page">
        {/* Banner Section */}
        <div className="about-banner">
          <h1>About Us</h1>
        </div>

        {/* Content Section */}
        <div className="about-content">
          {/* Image Section */}
          <div className="about-image">
            <img src="/images/Kanda.png" alt="Holding onions" />
          </div>


          {/* Text Section */}
          <div className="about-text">
            <h2>About <span>Supermoon Traders</span></h2>
            <p>
              Supermoon Traders is an exporting firm which was established as a farmer to marketplace trader under the leadership of Mr. Rahul K. Ghorpade in 1989. The marketplace trader has been now a step forward as a vegetable, fruit and spices exporter under the leadership of Mr. Akshay Rahul Ghorpade and Mr. Sunil Rahul Ghorpade with working experience in export industry of more than 7 years within their father's guidance.
            </p>
            <p>
              The firm which is established and developed in Chhatrapati Sambhajinagar (Aurangabad) from an
              agricultural state, Maharashtra. We take our vegetables from these reliable farmers. Who are in the
              relationship with marketplace trading with us from decades. These farmers take countless initiatives
              at their end to grow vegetables using cutting edge technology. This ensures that the final product
              comprises of all the vital nutrients and is free from any harmful substances. Our products
              are rich in taste and are packed in a pure& hygienic way. Such high quality product coupled
              with competitive pricing and well-timed delivery structure has enabled us to create new
              benchmarks in this field & be a prominent player.
            </p>
            <p>Our real font of inspiration is our business integrity and crystal clear dealings with our
              huge client base support which are located over a number of countries. We have successfully
              served our business all over India, Dubai, Oman, Kuwait, Saudi (Gulf Countries), Srilanka, Malaysia, Singapre, Indonesia,
              Philippines, Vietnam (Far East) and World Wide.</p>
          </div>
        </div>
        {/* Content Section */}


        {/* Key Persons */}

        <div class="key-persons-section">
          <h2>Key Persons</h2>
          <div class="key-persons-grid">
            <div class="person-card">
              <img src="/owners_image/owner1.png" alt="Mr. Suresh Jain" />
              <h3>Mr. Suresh Jain</h3>
            </div>
            <div class="person-card">
              <img src="/owners_image/owner2.png" alt="Mr. Manoj Jain" />
              <h3>Mr. Manoj Jain</h3>
            </div>
            <div class="person-card">
              <img src="/owners_image/owner3.png" alt="Mr. Gaurav Jain" />
              <h3>Mr. Gaurav Jain</h3>
            </div>
            <div class="person-card">
              <img src="/owners_image/owner4.png" alt="Mr. Kshitij Jain" />
              <h3>Mr. Kshitij Jain</h3>
            </div>
            <div class="person-card">
              <img src="/owners_image/owner5.png" alt="Mr. Sagar Jain" />
              <h3>Mr. Sagar Jain</h3>
            </div>
          </div>
        </div>
        {/* Key Persons */}

        {/* Company Profile */}

        <div class="company-profile-section">
          <h2>Company Profile</h2>
          <p>Basic Information</p>
          <div class="profile-grid">
            <div class="profile-item">
              <img src="/company_profile/exporter.png" alt="Exporter Icon" />
              <h3>Exporter</h3>
              <hr />
            </div>
            <div class="profile-item">
              <img src="/company_profile/supplier.png" alt="Supplier Icon" />
              <h3>Supplier</h3>
              <hr />
            </div>
            <div class="profile-item">
              <img src="/company_profile/wholesaler.png" alt="Wholesaler Icon" />
              <h3>Wholesaler</h3>
              <hr />
            </div>
            <div class="profile-item">
              <img src="/company_profile/trader.png" alt="Trader Icon" />
              <h3>Trader</h3>
              <hr />
            </div>
          </div>
        </div>


        {/* Company Profile */}

      </div>
    </div>
  );
};

export default About;
