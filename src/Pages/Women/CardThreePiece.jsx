import React from 'react';

const threePieceProducts = [
    {
        title: "Black Wool Three-piece Suit",
        price: "Tk 5,499.99",
        image: "public/38.webp",
    },
    {
        title: "Grey Formal Three-piece Suit",
        price: "Tk 6,199.00",
        image: "public/39.webp",
    },
    {
        title: "Navy Blue Designer Three-piece Suit",
        price: "Tk 7,499.50",
        image: "public/40.webp",
    },
    {
        title: "Charcoal Grey Classic Three-piece Suit",
        price: "Tk 6,999.00",
        image: "public/41.webp",
    },
];

const CardThreePiece = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {threePieceProducts.map((product, index) => (
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

export default CardThreePiece;
