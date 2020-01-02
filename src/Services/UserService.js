const ApiUrl = "http://localhost:8081";

export const us = {
    login,
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
            console.log("login:");
            console.log(res);
            if (res !== false) {
                localStorage.setItem('user', JSON.stringify(res));
            }

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
