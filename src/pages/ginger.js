import React from "react";
import '../css/product.css';

const garlic = () => {
    return (
        <div className="module">
            <div className="product-page">
                <div className="about-banner">
                    <h1> Ginger </h1>
                </div>

                {/* ---------------------------Ginger details------------------------------------------------ */}
                <div class="ginger-container">
                    <div class="ginger-card">
                        <div class="ginger-image-section">
                            <img src="/images/ginger.png" alt="Ginger-Image" class="ginger-image" />
                        </div>
                        <div class="ginger-content-section">
                            <h2>Ginger</h2>
                            <div class="underline"></div>
                            <p>
                                Ginger is a flowering plant whose rhizome, ginger root, or ginger, is widely used as a spice and a folk medicine.
                                It has a strong, spicy aroma and flavor that makes it a key ingredient in many cuisines worldwide.
                            </p>
                            <p>
                                Ginger is available in various forms:
                                1. Fresh Ginger
                                2. Dried Ginger
                                3. Powdered Ginger
                                4. Pickled Ginger.
                            </p>
                            <p>
                                Our Indian ginger is cultivated using organic methods and is available in different grades and packaging,
                                including net bags, cartons, and jute bags.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="benefits-container">
                    <div className="content-section">
                        <h2>Benefits Of Ginger</h2>
                        <hr className="separator" />
                        <p><strong>Ginger is widely used as a natural remedy to treat nausea, including morning sickness during pregnancy, motion sickness, and chemotherapy-induced nausea.</strong></p>
                        <p>Ginger helps improve digestion by speeding up the emptying of the stomach, which is beneficial for people suffering from indigestion or discomfort after eating.</p>
                        <p><strong>Ginger is effective at reducing muscle pain and soreness due to its anti-inflammatory properties, especially after exercise.</strong></p>
                        <p>Studies have shown that ginger can help reduce blood sugar levels and improve heart health by lowering bad cholesterol (LDL) and triglycerides.</p>
                        <p><strong>The antioxidant and antimicrobial properties in ginger can strengthen the immune system and protect against infections.</strong></p>

                    </div>
                </div>


            </div>

        </div>


    );
};

export default garlic;