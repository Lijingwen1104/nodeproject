const assert = require('assert');
const {expect} = require('chai');
const Constant = require('./Constant');
const fetchApi = require('./fetch');

describe('Test #1', () => {
    it('1. Execute three POST requests to insert three items into the collection.', async () => {
        for (let i = 0; i < 3; i++) {
            const m = await fetchApi.postItem({
                "status": `张${i}`,
                "message": `zhang${i}@qq.com`
            })
            expect(m).to.equal(Constant.CREATE_ENTRY_SUCCESSFUL);
            console.log(m);
        }
    });
    it('2. Execute a single item PUT request to modify a single item in the collection.', async () => {
        const m = await fetchApi.updateItemById(1, {
            "status": `李四`,
            "message": `lisi@qq.com`
        })
        console.log(m);
        expect(m).to.equal(Constant.UPDATE_ITEM_SUCCESSFUL);
    });
    it('3. Execute three separate item GET requests to check if each item is correct.', async () => {
        const data1 = await fetchApi.getItemById(1)
        console.log(data1);
        expect(data1).to.include({
            "msgid": 1,
            "status": "李四",
            "message": "lisi@qq.com"
        });
        const data2 = await fetchApi.getItemById(2)
        console.log(data2);
        expect(data2).to.include({
            "msgid": 2,
            "status": "张1",
            "message": "zhang1@qq.com"
        });
        const data3 = await fetchApi.getItemById(3)
        console.log(data3);
        expect(data3).to.include({
            "msgid": 3,
            "status": "张2",
            "message": "zhang2@qq.com"
        });
    });
});
describe('Test #2', () => {
    it('1. Execute a single collection PUT request that replaces the collection with 4 new\n' +
        'items.', async () => {
        const m = await fetchApi.putAllItems([
            {
                "status": "张三",
                "message": "zhangsan@qq.com"
            },
            {
                "status": "李四",
                "message": "lisi@qq.com"
            },
            {
                "status": "王五",
                "message": "wangwu@qq.com"
            },
            {
                "status": "赵六",
                "message": "zhaoliu@qq.com"
            }
        ])
        console.log(m);
        expect(m).to.equal(Constant.REPLACE_COLLECTION_SUCCESSFUL);
    });

    it('2. Execute a single collection GET request to check if all the items are correct.', async () => {
        const data = await fetchApi.getAllItems()
        console.log(data);
        expect(data.length).to.equal(4);
    });

    it('3. Execute a single item DELETE request to delete a single item from the collection.', async () => {
        const m = await fetchApi.deleteItemById(4)
        console.log(m);
        expect(m).to.equal(Constant.DELETE_ITEM_SUCCESSFUL);
    });

    it('4. Execute a single collection GET request to check if all the items are correct.', async () => {
        const data = await fetchApi.getAllItems()
        console.log(data);
        expect(data.length).to.equal(3);
    });
});
describe('Test #3', () => {
    it('1. Execute a single collection DELETE request to delete the entire collection.', async () => {
        const m = await fetchApi.deleteAllItems()
        console.log(m);
        expect(m).to.equal(Constant.DELETE_COLLECTION_SUCCESSFUL);
    });
    it('2. Execute a single collection GET request to check if the collection is empty.', async () => {
        const data = await fetchApi.getAllItems()
        console.log(data);
        expect(data.length).to.equal(0);
    });
    it('3. Execute a single collection PUT request to replace the collection with 3 new\n' +
        'items.', async () => {
        const m = await fetchApi.putAllItems([
            {
                "status": "mary",
                "message": "mary@qq.com"
            },
            {
                "status": "lily",
                "message": "lily@qq.com"
            },
            {
                "status": "kate",
                "message": "kate@qq.com"
            }
        ])
        console.log(m);
        expect(m).to.equal(Constant.REPLACE_COLLECTION_SUCCESSFUL);
    });
    it('4. Execute two POST requests to insert two items into the collection.', async () => {
        const m1 = await fetchApi.postItem(
            {
                "status": "jim",
                "message": "jim@qq.com"
            })
        console.log(m1);
        expect(m1).to.equal(Constant.CREATE_ENTRY_SUCCESSFUL);

        const m2 = await fetchApi.postItem(
            {
                "status": "tom",
                "message": "tom@qq.com"
            })
        console.log(m2);
        expect(m2).to.equal(Constant.CREATE_ENTRY_SUCCESSFUL);
    });
    it('5. Execute a single item PUT request to modify a single item in the collection.', async () => {
        const m = await fetchApi.updateItemById(8,
            {
                "status": "San Maria",
                "message": "SanMaria@163.com"
            })
        console.log(m);
        expect(m).to.equal(Constant.UPDATE_ITEM_SUCCESSFUL);
    });
    it('6. Execute a single item DELETE request to delete a single item from the collection.', async () => {
        const m = await fetchApi.deleteItemById(9)
        console.log(m);
        expect(m).to.equal(Constant.DELETE_ITEM_SUCCESSFUL);
    });
    it('7. Execute a single collection GET request to check if all the items are correct.', async () => {
        const data = await fetchApi.getAllItems()
        console.log(data);
        expect(data.length).to.equal(4);
    });
});
