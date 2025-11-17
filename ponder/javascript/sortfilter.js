nums = [14,15,2,4,3,6];

console.log(nums.sort());

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let lowerlist = simpleList.map(function(fruit){
    return fruit.toLowerCase();
});

console.log(lowerlist.sort());

let searchTerm = 'an';

let filterFruit = lowerlist.filter(searchFruit);
console.log(filterFruit);

function searchFruit(fruit){
    return fruit.includes(searchTerm);
}


function compareFn(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
 return 0;
}


const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];       

console.log(products.sort(compareFn))


const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
              

let query = 'dog';

let filteredList = animals.filter(searchList);

console.log(filteredList);

function searchList(item){
    return item.name.toLowerCase().includes(query.toLowerCase());
}

let queryTrait = "cuddly";
let filteredtraits = animals.filter(searchTraits);

function searchTraits(item){
    return item.traits.find((trait) =>
    trait.toLowerCase().includes(queryTrait.toLowerCase()));
}

console.log(filteredtraits);