import React , {Component} from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component
{
    constructor()
    {
        super();

        this.state = {
            name: "",
            price: 0,
            imgurl: "",
        }
    }

    componentDidMount()
    {
        const {id} = this.props.match.params;
        console.log(id);
        if(id !== '0')
        {
            axios.get(`/api/products/${id}`)
            .then((response) =>
            {
                const {name, price, img} = response.data[0];
                console.log(response.data);
                this.setState({
                    name: name,
                    price: price,
                    imgurl: img
                });
            })
            .catch((error) =>
            {
                console.log("error", error);
            });
        }
    }
    handleNameChange(event)
    {
        this.setState({
            name: event.target.value
        });
    }

    handlePriceChange(event)
    {
        this.setState({
            price: event.target.value
        });
    }

    handleImgurlChange(event)
    {
        this.setState({
            imgurl: event.target.value
        });
    }

    postProduct()
    {
        const newProduct = {
            name: this.state.name,
            price: this.state.price,//parseInt(this.state.price, 10),
            img: this.state.imgurl
        }
        //axios request make sure to use a parse int on the price.
        axios.post('/api/products', newProduct)
        .then((response) =>
        {
            console.log(response.data);
        })
        .catch((error) =>
        {
            console.log("error", error);
        });
        
       console.log("added to inventory", newProduct);
    }

    putProduct()
    {
        const {id} = this.props.match.params
        const updatedProduct = {
            name: this.state.name,
            price: this.state.price,//parseInt(this.state.price, 10),
            img: this.state.imgurl,
            id: id
        }
        //axios request make sure to use a parse int on the price.
        axios.put(`/api/products`, updatedProduct)
        .then((response) =>
        {
            console.log(response.status);
        })
        .catch((error) =>
        {
            console.log("error", error);
        });
        
       console.log("updated", updatedProduct);
    }

    clearInputs()
    {
        this.setState({
            name: "",
            price: 0,
            imgurl: ""
        });
    }

    render()
    {
        let button = "";
        if(this.props.match.params.edit === 'true' )
        {
            button = <button
            onClick={()=> this.putProduct()}
            >Save Changes</button>
        }
        else
        {
           button = <button
            onClick={()=> this.postProduct()}
            >Add to library</button>
        }

        return(
            <div className='form_container'>
                <div className='form'>
                    <div className='img_container'>
                        {/* <img src={this.state.imgurl} alt="product"/> */}
                    </div>
                    IMG URL:
                     <input
                    onChange={(event) => this.handleImgurlChange(event)}
                    value={this.state.imgurl}
                    />

                    Product Name:
                    <input
                    onChange={(event) => this.handleNameChange(event)}
                    value={this.state.name}
                    />

                    Price:
                    <input
                    onChange={(event) => this.handlePriceChange(event)}
                    value={this.state.price}
                    /> 

                    <div className='form_buttons'>
                        <button
                        onClick={() => this.clearInputs()}
                        >
                        Cancel</button>
                        {button}
                    </div>

                </div> 
            </div>
        );
    }
}

export default Form;