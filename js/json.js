// console.log('APl');

// const user = {id: 11, name: 'Gorib Amir', job: 'actor'};
// const stringfied = JSON.stringify(user);
// console.log(stringfied);
// console.log(user);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    product: ['Laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor'
    },
    inExpensive: false
};

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);