const baseUrl = "http://localhost:3000/api/transaction/product-claim";
const token = localStorage.getItem("token");

export const getProductClaim = (search = "") => {
  return new Promise(async (resolve, reject) => {
    const request = await fetch(`${baseUrl}/get?search=${search}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await request.json();
    resolve(response);
  }).catch((error) => resolve(error));
};

export const approve = (id, status) => {  
  return new Promise(async (resolve, reject) => {
    const request = await fetch(`${baseUrl}/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: id,
        status: status,
      }),
    });

    const response = await request.json();
    resolve(response);
  }).catch((error) => resolve(error));
};

export const claimProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    const request = await fetch(`${baseUrl}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const response = await request.json();
    resolve(response);
  }).catch((error) => resolve(error));
};
