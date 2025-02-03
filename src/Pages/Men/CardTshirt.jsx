import React from 'react';

const tshirtProducts = [
    {
        title: "Cotton Men's T-shirt",
        price: "Tk 799.99",
        image: "public/30.webp",
    },
    {
        title: " Graphic Print T-shirt",
        price: "Tk 1,199.00",
        image: "public/31.webp",
    },
    {
        title: " Casual T-shirt",
        price: "Tk 999.50",
        image: "public/32.webp",
    },
    {
        title: " Premium T-shirt",
        price: "Tk 1,499.00",
        image: "public/33.webp",
    },
];

const CardTshirt = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {tshirtProducts.map((product, index) => (
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

export default CardTshirt;
