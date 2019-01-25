import React from 'react';
import Product from './Product/Product';
import './Dashboard.css';

function Dashboard(props)
{
    const products = props.inventory.map((curVal, index) =>
    {
        return(
            <Product key={index} product={curVal}/>
        )
    })
    return(
        <div className='dashboard'>
            Im the Dashboard Component
            {products}
        </div>
    );
}

export default Dashboard;