import axios from 'axios';
let gowhere = axios.create({
    baseURL: 'http://localhost:12345'
})

<<<<<<< HEAD
async function getCode(phone, config = {}) {
    let { data } = await datalist.get('/notecode', {
=======
async function get(params, config = {}) {
    let { data } = await gowhere.get('/home', {
        ...config,
        params
    })
    return data;
}

async function getCode(phone, config = {}) {
    let data = await gowhere.get('/notecode', {
>>>>>>> wwg
        params:{
            ...config,
            phone
        }        
    })
    console.log("data", data)
    return data;
}


async function list(params) {
    let data = await gowhere.get('/list', {
        params
    });
    return data;
}

async function checkAttention(params) {
    let data = await gowhere.get('/content/checkgz', {
        params
    });
    return data;
}

async function addAttention(params) {
    let data = await gowhere.get('/content/addgz', {
        params
    });
    return data;
}

async function special(params) {
    let data = await gowhere.get('/page', {
        params
    });
    return data;
}
async function weidan(params) {
    let data = await gowhere.get('/page/pagef', {
        params
    });
    return data;
}
async function dijia(params) {
    let data = await gowhere.get('/page/pages', {
        params
    });
    return data;
}
async function ziyouxing(params) {
    let data = await gowhere.get('/page/paget', {
        params
    });
    return data;
}


export default {
    getCode,
    get,
    list,
    getCode,
    checkAttention,
    addAttention,
    special,
    weidan,
    dijia,
    ziyouxing
}
