const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

// 获取所有item
async function getAllItems() {
    const data = await instance.get('/api');
    return data.data;
}

// 替换所有item
async function putAllItems(items) {
    const data = await instance.put('/api', items);
    return data.data;
}

// 新增item
async function postItem(item) {
    const data = await instance.post('/api', item);
    return data.data;
}

// 删除所有item
async function deleteAllItems() {
    const data = await instance.delete('/api');
    return data.data;
}

// 根据id获取item详情
async function getItemById(id) {
    const data = await instance.get(`/api/${id}`);
    return data.data;
}

// 根据id更新item
async function updateItemById(id, item) {
    const data = await instance.put(`/api/${id}`, item);
    return data.data;
}

// 根据id删除item
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
