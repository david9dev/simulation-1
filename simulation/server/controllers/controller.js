


module.exports = {

    getAll: function(request, response)
    {
        request.app.get('db').get_inventory()
        .then((products) => 
        {
            response.status(200).send(products);
        })
        .catch((error) =>
        {
            console.log('error', error);
            response.status(500).json("couldnt get inventory");
        })
    },
    getOne: function(request, response)
    {
        const {id} = request.params;
        request.app.get('db').get_product(id)
        .then((product) =>
        {
            response.status(200).send(product);
        })
        .catch((error) =>
        {
            console.log("error", error);
            response.status(500).json('couldnt get product');
        })
    },

    postOne: function(request, response)
    {
        const {name, price, img} = request.body;

        request.app.get('db').add_product([name, price, img])
        .then(() =>
        {
            response.status(200).json("product added");
        })
        .catch((error) =>
        {
            console.log('error', error);
            response.status(500).json("Error, couldnt add product");
        })
    },

    updateOne: function(request, response)
    {
        const {id, name, price, img} = request.body;
        request.app.get('db').put_product(id,name,price,img)
        .then(() => 
        {
            response.status(200).json('updated item');
        })
        .catch((error) =>
        {
            console.log('error', error);
            response.status(500).json('couldnt update item');
        })
    },

    deleteOne: function(request, response)
    {
        const {id} = request.params;
        request.app.get('db').delete_product(id)
        .then(() =>
        {
            response.status(200).json('deleted item');
        })
        .catch((error) =>
        {
            console.log('error', error);
            response.status(500).json('couldnt delete item');
        });
    }

    

};