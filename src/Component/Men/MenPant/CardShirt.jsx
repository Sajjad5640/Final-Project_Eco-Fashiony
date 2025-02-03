import React from 'react';

const CardShirt = () => {
    return (
        <div className="grid grid-cols-4 gap-10">
      <div className="card card-compact bg-base-100 max-w-96  shadow-xl p-2 m-4 ">
        <figure>
          <img
            src="public/fs1.jpg"
            alt="Shoes" class="w-64 h-auto"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">White Formal Shirt</h2>
          <p>TK 3,000</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 max-w-96 shadow-xl p-2 m-4 ">
        <figure >
          <img
            src="public/fs2.jpg"
            alt="Shoes" class="w-64 h-auto"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Off-white Formal Shirt</h2>
          <p>TK 3,200</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 max-w-96 shadow-xl p-2 m-4 ">
        <figure>
          <img
            src="public/cs2.jpg"
            alt="Shoes" class="w-64 h-auto" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Casual Shirt</h2>
          <p>TK 700</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 max-w-96 shadow-xl p-2 m-4 ">
        <figure>
          <img
            src="public/cs3.jpg"
            alt="Shoes"  class="w-64 h-auto"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Olive Shirt</h2>
          <p>TK 1,200</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 max-w-96 shadow-xl p-2 m-4  ">
        <figure>
          <img
            src="public/fs1.jpg"
            alt="Shoes" class="w-64 h-auto" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">White Formal Shirt</h2>
          <p>TK 3,000</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 max-w-96 shadow-xl p-2 m-4 ">
        <figure>
          <img className='h-96 w-64'
            src="public/fs1.jpg"
            alt="Shoes" class="w-64 h-auto" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">White Formal Shirt</h2>
          <p>TK 3,000</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 max-w-96 shadow-xl p-2 m-4 ">
        <figure>
          <img
            src="public/fs4.jpg"
            alt="Shoes" class="w-64 h-80 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Skyblue Formal Shirt</h2>
          <p>TK 3,500</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 max-w-96 shadow-xl p-2 m-4 ">
        <figure>
          <img
            src="public/fs3.jpg"
            alt="Shoes" class="w-64 h-80 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Black Formal Shirt</h2>
          <p>TK 4,000</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CardShirt;