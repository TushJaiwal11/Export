import React from "react";

const maize = () => {
    return (
        <div className="module">
            <div className="product-page">
                <div className="about-banner">
                    <h1> Garlic </h1>
                </div>

                {/* ---------------------------Ginger details------------------------------------------------ */}
                <div class="ginger-container">
                    <div class="ginger-card">
                        <div class="ginger-image-section">
                            <img src="/images/garlic.png" alt="Ginger-Image" class="ginger-image" />
                        </div>
                        <div class="ginger-content-section">
                            <h2>Garlic</h2>
                            <div class="underline"></div>
                            <p>
                                Garlic is a perennial that can grow two feet high or more. The most important part of this plant for medicinal purposes is the compound bulb. Each bulb is made up of 4 to 20 cloves, and each clove weighs about 1 gram.</p>
                            <p>
                                Garlic available in three type 1. Desi Garlic 2. Ooty Garliv 3. Rajasthani Garlic and they divide as per size like single clove (kali) 25 to 35mm ( medium) 35 to 42mm (ladva) 42 to above (big laddu).
                            </p>
                            <p>
                                Our Indian garlic provide you all types of size and packing available with net bags and mini jute bags
                            </p>
                        </div>
                    </div>
                </div>


                <div className="benefits-container">
                    <div className="content-section">
                        <h2>Benefits Of Garlic</h2>
                        <hr className="separator" />
                        <p><strong>Garlic Contains Compounds With Potent Medicinal Properties.</strong></p>
                        <p>Garlic Is Highly Nutritious But Has Very Few Calories.</p>
                        <p><strong>Garlic Can Combat Sickness, Including the Common Cold.</strong></p>
                        <p>The Active Compounds in Garlic Can Reduce Blood Pressure.</p>
                        <p><strong>Garlic Improves Cholesterol Levels, Which May Lower the Risk of Heart Disease.</strong></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default maize;