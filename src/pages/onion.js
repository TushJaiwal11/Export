import React from "react";
import '../css/product.css';

const onion = () => {
    return (
        <div className="module">
            <div className="product-page">
                <div className="about-banner">
                    <h1> Onion </h1>
                </div>
                <div class="content-container">
                    <div class="onion-product-container">

                        <div class="onion-card">
                            <img src="/productImages/onion1.png" alt="Red Onion" class="onion-image" />
                            <h3>Red Onion</h3>
                            <hr class="separator" />
                            <p>This is our most striking product which is cultivated using the best quality seeds and latest processing techniques in complete accordance with the set international standards. With the help of our professionals, we are able to trade, export, wholesale and supply Red Mesh bags and jute Packing Onion. We provide red onion of small size, medium size and big size onion.

                                Red onion quality onion has been positioned as a pioneer in terms of richness in quality and purity in taste the onion industry domain.
                                <br />
                                1. Small size red onion of size - 20 mm to 30 mm They are freshness / richness in taste.
                                <br />
                                2. Medium size red onion of size - size 40 mm to 45+ mm. They are long shelf life / delicious taste.
                                <br />
                                3. Big size red onion of size - 50 mm to 60+ mm. They are attractive as color & taste/long shelf life.
                                <br />
                                This occurs approximately six months after planting. Red onions may be used in recipes. The highest concentrations of quercetin occur in the outermost rings and in the part closest to the root.</p>
                        </div>

                        <div class="onion-card">
                            <img src="/productImages/onion2.png" alt="White Onion" class="onion-image" />
                            <h3>White Onion</h3>
                            <hr class="separator" />
                            <p>This product is available only on seasonal basis mostly November to February. At that time we provide all size and packing for domestic and international standards.

                                Onions should be stored in a cool, dry location with good ventilation. They should not be stored in either a plastic bag. Avoid prolonged storage in a refrigerator - unless the onion is on the verge of spoiling.</p>
                        </div>

                        <div class="onion-card">
                            <img src="/productImages/onion3.png" alt="Summer Onion" class="onion-image" />
                            <h3>Summer Onion</h3>
                            <hr class="separator" />
                            <p>Summer onion, also known as a pink onion, is a variety of dry onion with a strong flavor. White inside, its layers of papery skin have a yellow-brown color.

                                It has a rich onion taste and is fit for food dishes like french onion soup. Yellow onions are typically available throughout the year. This onion is higher in sulfur than the white onion, which gives it a stronger, more complex flavor.

                                A dozen varieties of yellow onion are grown, following the time of year. They vary in nutritional content.Each yellow onion plant produces a singular edible bulbous root. The root forms a layered paper-like, copper-hued skin wrapped around its creamy white translucent, firm and succulent ringed flesh. Its high sulfur content makes it robust and sharp in both aroma and flavor.</p>
                        </div>
                    </div>

                </div>

                {/* -------------------------------onion Packing----------------------------------- */}



                <div className="packing-container">
                    <div className="image-section">
                        <img
                            src="/productImages/packing.png" // Path to your uploaded image
                            alt="Packed onions"
                            className="packing-image"
                        />
                    </div>
                    <div className="content-section">
                        <h2>Packing Available</h2>
                        <p>
                            Our mesh bags are typically used to store onion. Cultivated with the help of agro experts, this onion is absolutely fresh and healthy.
                        </p>
                        <p>
                            5kg, 10kg, 14kg, 20kg, 25kg, and 45kg etc. Jute bags and leno bags packing is available.
                        </p>
                        <p>Customized packing is also available.</p>
                    </div>
                </div>






                {/* benifit */}


                <div className="benefits-container">
                    <div className="content-section">
                        <h2>Benefits Of Onion</h2>
                        <hr className="separator" />
                        <p><strong>Packed with nutrients.</strong></p>
                        <p>Onions are nutrient-dense, meaning they're low in calories but high in vitamins and minerals.</p>
                        <p><strong>May benefit heart health.</strong></p>
                        <p>Loaded with antioxidants.</p>
                        <p><strong>Contain cancer-fighting compounds.</strong></p>
                        <p>Help control blood sugar.</p>
                        <p><strong>May boost bone density.</strong></p>
                        <p>Have antibacterial properties.</p>
                        <p><strong>May boost digestive health.</strong></p>
                    </div>
                </div>










            </div>

        </div>






    );
};

export default onion;