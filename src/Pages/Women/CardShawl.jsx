import React from 'react';

const shawlProducts = [
    {
        title: "Cashmere Wool Shawl",
        price: "Tk 2,299.99",
        image: "public/34.webp",
    },
    {
        title: "Elegant Silk Shawl",
        price: "Tk 3,799.00",
        image: "public/35.webp",
    },
    {
        title: "Cotton Floral Printed Shawl",
        price: "Tk 1,499.50",
        image: "public/36.webp",
    },
    {
        title: "Winter Fleece Shawl",
        price: "Tk 1,899.00",
        image: "public/37.webp",
    },
];

const CardShawl = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {shawlProducts.map((product, index) => (
                <div key={index} className="card card-compact bg-base-100 max-w-96 shadow-xl p-2 m-4">
                    <figure>
                        <img src={product.image} alt={product.title} className="w-64 h-auto object-cover" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardShawl;
