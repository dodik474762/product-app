const baseUrl = 'http://localhost:3000/api/transaction/product-claim';

export const  getProductClaim = (search = "") => { 
    const token = localStorage.getItem('token');   
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