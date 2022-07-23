import axios from 'axios';

const ROOT_URL = "http://localhost:";

export class HttpService {

    headers = {}

    constructor(url_prefix = "", port) {
        this.url_prefix = url_prefix;
        this.port = port;
        this.getHeaders()
    }

    async get(queryParams) {

        try {
            
            const { data } = await axios.get(this.buildUrl(true,queryParams), {
                headers: this.headers
            });

            return data;

        } 
        catch (error) {
            return null;
        }
    }

    getHeaders() {
        
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        if (this.checkSession()) {
            
            let apiToken = this.getSession()
            this.headers = {
                ...this.headers,
                "Authorization": `Bearer ${apiToken}`
            }
        }
    }

    getSession() {
        let session = localStorage.getItem("TOKEN")
        
        return (session) ? session : "";
    }

    checkSession() {
        return localStorage.getItem("TOKEN") !== null
    }

    buildUrl(doesHaveUrlParams, queryParams) {

        return (doesHaveUrlParams) 
            ? ROOT_URL + this.port + "/" + this.url_prefix + "/" + queryParams
            : ROOT_URL + this.port + "/" + this.url_prefix;

    }
}