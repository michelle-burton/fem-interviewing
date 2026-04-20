console.log('testing JS loaded!')

const nums = [1, 2, 3, 4, 5, 6];

function oddNum (arr) {
    return arr.filter(item => item % 2 !== 0);
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Carol', age: 30 },
];


function overEighteen (arr){
    return arr.filter(user => user.age > 18 )
            .map(user => user.name);
}

const nums = [10, 20, 30];

function sum(num){
    return nums.reduce((accum, num) => {
        return accum += num;
     }, 0)
}

const nums2 = [1, 2, 3, 4, 5, 6];
function sumEven(nums2) {
    return nums2.filter(num => num % 2 === 0)
       .reduce((accum, num) => {
        return accum += num;
       }, 0)
}

const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Carol', active: true },
];

function count(arr){
    return arr.filter(user => user.active === true).length;
         
}

function count2(arr){
    return arr.reduce((count, item) => {
        return item.active === true ? count +1 : count;
    }, 0)
}

const items = [
  { name: 'Apple', type: 'fruit' },
  { name: 'Carrot', type: 'vegetable' },
  { name: 'Banana', type: 'fruit' },
];

function typeList(arr){
    return arr.reduce((accum, item) => {
        return acc[item.type] ? accum : accum + 1
    }, 0)
}


function typeList(arr) {
    return arr.reduce((acc, item) => {
       if(!accum[item.type]){
        accum[item.type] = [];
       }

       accum[item.type].push(item.name;
        return accum;
       )
    }, {})
}