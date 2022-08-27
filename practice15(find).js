const phone = [
    { name:'iphone', barand: 'apple', price: 85000},
    { name:'realme', barand: 'realme', price: 8000},
    { name:'redmi', barand: 'xioami', price: 5000},
    { name:'Oppo f32', barand: 'Oppo', price: 5000},
    { name:'samsung s22', barand: 'samsung', price: 85000},
    { name:'nokia n-32', barand: 'nokia', price: 75000},
]

const desirePhone = phone.find(phone => phone.price==5000);
console.log(desirePhone);