import React from 'react';

const Stat = () => {
    return (
        <div>
            <div className="stats shadow">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m5 18V3m5 18V3"></path>
                    </svg>
                </div>
                <div className="stat-title">Total Sales</div>
                <div className="stat-value text-primary">$120K</div>
                <div className="stat-desc">15% increase from last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <div className="stat-title">Returning Customers</div>
                <div className="stat-value text-secondary">68%</div>
                <div className="stat-desc">5% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                </div>
                <div className="stat-title">Sustainable Products Sold</div>
                <div className="stat-value text-green-500">5.2K</div>
                <div className="stat-desc">30% more than last month</div>
            </div>
        </div>
        </div>
    );
};

export default Stat;