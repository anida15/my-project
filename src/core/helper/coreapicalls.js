import { API } from "../../backend"


export const getHostel = () => {


    return fetch(`${API}hostel`, { method: "GET" })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const getUser = () => {


    return fetch(`${API}user`, { method: "GET" })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};



