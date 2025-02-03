import React from 'react';
import Banner1 from '../../Component/HomePage/Banner1';

import Stat from '../../Component/HomePage/Stat';
import Card from '../../Component/HomePage/Card';

const HomePage = () => {
    return (
        <div>
            <Banner1></Banner1>
            <h1 class="text-5xl font-bold text-center text-primary">Explore Our Product</h1>

            <Card></Card>
           
            <Stat></Stat>
        </div>
    );
};

export default HomePage;