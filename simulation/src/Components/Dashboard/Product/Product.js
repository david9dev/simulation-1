import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function handleDelete(id)
{
    axios.delete(`/api/products/${id}`)
    .then((response) =>
    {
        console.log(response.data);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}


function Product(props)
{
    const {name, price, img, id} = props.product;
    return(
        <div className='product_container'>
            <img src={img} alt={name}/>
            <main className='product_info'>
                <div className='product'>
                    {price}
                    {name}
                </div>
                <div className='product_buttons'>
                    <Link to={`/form/true/${id}`}><button>edit</button></Link>
                    <button
                    onClick={() => handleDelete(props.product.id)}>delete</button>
                </div>
            </main>
        </div>
    );
}

export default Product;