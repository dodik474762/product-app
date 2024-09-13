
const baseUrl = 'http://localhost:3000/api/auth';
export const login = (username, password) => {
    return new Promise(async (resolve, reject) => {
        const request = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        const response = await request.json();
        resolve(response);
    }).catch(error => resolve(error));
}

export const register = (username, password, roles) => {
    return new Promise(async (resolve, reject) => {
        const request = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                roles
            })
        })

        const response = await request.json();
        resolve(response);
    }).catch(error => resolve(error));
}