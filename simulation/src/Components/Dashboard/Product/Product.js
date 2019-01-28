import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Product.css';
import {toast} from 'react-toastify'


function handleDelete(id)
{
    axios.delete(`/api/products/${id}`)
    .then((response) =>
    {
        console.log(response.data);
        toast.success("item deleted");
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
            <img className='product_img'src={img} alt={name}/>
            <main className='product_info'>
                <div className='product'>
                    <div className='name'>
                        {name}
                    </div>
                    <div className='price'>
                        ${price}
                    </div>
                </div>
                <div className='product_buttons'>
                    <button
                    onClick={() => handleDelete(props.product.id)}>Delete</button>
                    <Link to={`/form/true/${id}`}><button>Edit</button></Link>
                </div>
            </main>
        </div>
    );
}

export default Product;