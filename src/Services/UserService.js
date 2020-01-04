const ApiUrl = "https://steamshop.herokuapp.com";
//const ApiUrl = "http://localhost:8080";

export const us = {
    login,
    register,
    updateInfo,
    getUserById,
    getBankingInfo,
    getInvoice,
    checkout,
    updateBankingCard,
}

function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${ApiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(res => {
            
            if (res.user !== false) {
                let cart = [];
                localStorage.setItem('user', JSON.stringify(res));
                localStorage.setItem('cart', JSON.stringify(cart));
            }

            return res;
        });
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${ApiUrl}/register`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

function updateInfo(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };

    return fetch(`${ApiUrl}/users`, requestOptions)
        .then(handleResponse)
        .then(res => {            
            return res;
        });
}


function getUserById(id) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: id}),
    };

    return fetch(`${ApiUrl}/getUsersById`, requestOptions)
        .then(handleResponse)
        .then(res => {            
            return res;
        });
}


function getBankingInfo(id) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: id}),
    };

    return fetch(`${ApiUrl}/bankingCard`, requestOptions)
        .then(handleResponse)
        .then(res => {            
            return res;
        });
}

function getInvoice(id) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id_customer: id}),
    };

    return fetch(`${ApiUrl}/getInvoiceDetails`, requestOptions)
        .then(handleResponse)
        .then(res => {            
            return res;
        });
}

function checkout(newInvoice) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInvoice),
    };

    return fetch(`${ApiUrl}/addInvoice`, requestOptions)
        .then(handleResponse)
        .then(res => {            
            return res;
        });
}


function updateBankingCard(id, cardNum, cardType) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id_user: id, cardNum: cardNum, cardType: cardType}),
    };

    return fetch(`${ApiUrl}/bankingCard`, requestOptions)
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
