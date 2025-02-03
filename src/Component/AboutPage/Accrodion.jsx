import React from 'react';

const Accrodion = () => {
    return (
        <div>
            <div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Our Commitment to Sustainability</div>
                        <div className="collapse-content">
                            <p>We source eco-friendly materials like organic cotton, hemp, and recycled polyester.
                                Our manufacturing processes minimize water usage and reduce carbon emissions.
                                Packaging is 100% biodegradable or made from recycled materials</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Explore Our Eco-Friendly Collections</div>
                        <div className="collapse-content">
                            <p>Men's Wear: Sustainable shirts, pants, and t-shirts.
                                Women's Wear: Dresses, sarees, and accessories made from eco-conscious fabrics.
                                Kids' Wear: Comfortable, non-toxic, and planet-friendly apparel.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Why eco-&-fashiony?</div>
                        <div className="collapse-content">
                            <p>Affordable Sustainability: Style without harming the planet.
                                Ethical Production: Supporting fair trade and artisan craftsmanship.
                                Inclusive Fashion: Sizes and styles for everyone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accrodion;