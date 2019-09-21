const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

async function getAllItems() {
    const data = await instance.get('/api');
    return data.data;
}

async function putAllItems(items) {
    const data = await instance.put('/api', items);
    return data.data;
}

async function postItem(item) {
    const data = await instance.post('/api', item);
    return data.data;
}

async function deleteAllItems() {
    const data = await instance.delete('/api');
    return data.data;
}

async function getItemById(id) {
    const data = await instance.get(`/api/${id}`);
    return data.data;
}

async function updateItemById(id, item) {
    const data = await instance.put(`/api/${id}`, item);
    return data.data;
}

async function deleteItemById(id) {
    const data = await instance.delete(`/api/${id}`);
    return data.data;
}

module.exports = {
    getAllItems,
    putAllItems,
    postItem,
    deleteAllItems,
    getItemById,
    updateItemById,
    deleteItemById
}
