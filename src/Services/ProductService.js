const ApiUrl = "https://steamshop.herokuapp.com";
//const ApiUrl = "http://localhost:8080";

export const ProductSer = {
    getTopProduct,
    getProductByCategory,
    getProductByQuery,
    getProdutById,
}

function getTopProduct() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${ApiUrl}/getAllProducts`, requestOptions)
        .then(handleResponse)
        .then(res => {            
            return res;
        });
}

function getProductByCategory(id) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id_category: id}),
    };

    return fetch(`${ApiUrl}/getProductByCategory`, requestOptions)
        .then(handleResponse)
        .then(res => {            
            return res;
        });
}

function getProductByQuery(query) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({searchStr: query}),
    };

    return fetch(`${ApiUrl}/getProductByQuery`, requestOptions)
        .then(handleResponse)
        .then(res => {            
            return res;
        });
}

function getProdutById(id) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: id}),
    };

    return fetch(`${ApiUrl}/getProductById`, requestOptions)
        .then(handleResponse)
        .then(res => {            
            return res;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                //logout();
                //window.location.reload(true);
                alert('code: 401');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
