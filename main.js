let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.reverse().slice(-num).reverse()); // ["Ahmed", "Elham", "Osama"];

// Method 2
let num2 = myFriends.length - num // num2 = 4 - 3 = 1
console.log(myFriends.reverse().splice(--num2, num)); // ["Ahmed", "Elham", "Osama"];