import React from 'react';

const punjabiProducts = [
    {
        title: "Cotton Men's Punjabi",
        price: "Tk 1,999.99",
        image: "public/26.webp",
    },
    {
        title: "Embroidered Wedding Punjabi",
        price: "Tk 3,500.00",
        image: "public/27.webp",
    },
    {
        title: "Designer Punjabi",
        price: "Tk 2,799.50",
        image: "public/28.webp",
    },
    {
        title: "Stylish Punjabi for Men",
        price: "Tk 2,399.00",
        image: "public/29.webp",
    },
];

const CardPunjabi = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {punjabiProducts.map((product, index) => (
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

export default CardPunjabi;
