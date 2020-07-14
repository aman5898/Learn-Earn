import axios from 'axios';

const apiEndpoint = process.env.API_URL;

const API = (method, uri, payload, token, extra_headers = {}) => {
    return new Promise((resolve, reject) => {
        
        let custom_headers = {
            "x-auth-token": token,
            ...extra_headers
        };
                
        axios({
            method: method,
            url: uri,
            baseURL: apiEndpoint,
            headers: custom_headers,
            data: payload
        }).then(res => {
            resolve({ response: res.data, success: true });
        }).catch(err => {
            resolve({ response: err.response, success: false });
        })
    })
}

export default API;