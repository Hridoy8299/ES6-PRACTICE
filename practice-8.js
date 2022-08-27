/*
টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। 
একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/

const family = `name:Hridoy
fathe: Habibur Rahman
mother:rebeka sultana`;

let HridoyAge= 25;
let FatherAge= 25;

const son ={
    name:'hridoy',
    age:25,
    address: 'dhaka'

}



console.log(family);
console.log(`hridoy age is ${HridoyAge}, 
father age is ${FatherAge}`)
console.log(`son address is ${son.address}`)