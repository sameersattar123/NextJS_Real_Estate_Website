import  Axios from "axios";

const headers = {
    'X-RapidAPI-Key': '2c07a8c4d1mshf2a05a4b735238ep1bf907jsn26d16ade65d2',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}

export const axios = Axios.create({
    baseURL : "https://bayut.p.rapidapi.com",
    headers: headers
}) 