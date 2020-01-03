const ApiUrl = "https://steamshop.herokuapp.com";
//const ApiUrl = "http://localhost:8080";

export const CategorySer = {
    getAllCategories,
}

function getAllCategories() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${ApiUrl}/getCategories`, requestOptions)
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
