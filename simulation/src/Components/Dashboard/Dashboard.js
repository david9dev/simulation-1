import React, {Component} from 'react';
import Product from './Product/Product';
import './Dashboard.css';

class Dashboard extends Component
{  
    render()
    {
        const products = this.props.inventory.map((curVal, index) =>
        {
            return(
                <Product key={index} product={curVal}/>
            )
        });

        return(
            <div className='dashboard'>
                {products}
            </div>
        );
    }
    
}

export default Dashboard;