const baseUrl = 'http://localhost:3000/api/master/product';
const token = localStorage.getItem('token');

export const getProductItem = (search = "") => {
    return new Promise(async (resolve, reject) => {
        const request = await fetch(`${baseUrl}/get?search=${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const response = await request.json();
        resolve(response);
    }).catch(error => resolve(error));
};

export const getDetailProductItem = (id) => {    
    return new Promise(async (resolve, reject) => {
        const request = await fetch(`${baseUrl}/getDetail?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const response = await request.json();
        resolve(response);
    }).catch(error => resolve(error));
};

export const submit = (data) => {
    return new Promise(async (resolve, reject) => {
        const request = await fetch(`${baseUrl}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        const response = await request.json();
        resolve(response);
    }).catch(error => resolve(error));
}