//Task 1
let food = ['pizza', 'burger', 'cesar', 'burrito', 'pasta'];
food[5] = 'dolma';
food[6] = 'lasagna';
food[7] = 'plov';
food[3] = 'sandwich';
let arr = [];
for (let i = 0; i < food.length; i++) {
  if (food[i].length > 7) {
    arr.push(food[i]);
  }
}
console.log(arr);

//Task 2
let dailyTemperatures = [12, 21, 17, 8, 2, 14, 27];
let average = 0;
let maxTemp = 0;
let minTemp = dailyTemperatures[0];
for (let i = 0; i < dailyTemperatures.length; i++) {
  average += dailyTemperatures[i] / dailyTemperatures.length;

  const arrTemp = dailyTemperatures[i];
  if (arrTemp > maxTemp) {
    maxTemp = arrTemp;
  }
  if (arrTemp < minTemp) {
    minTemp = arrTemp;
  }
}
console.log(minTemp);
console.log(maxTemp);
console.log(average);

//Task 3
let person = {
  name: 'John',
  age: 23,
  city: 'London',
  job: 'Manager',
};
person.city = 'NY';
person.gender = 'Male';
console.log(person);

let friend1 = {
  name: 'Leyla',
  age: 23,
  isCloseFriend: true,
};
let friend2 = {
  name: 'Amir',
  age: 25,
  isCloseFriend: false,
};
let friend3 = {
  name: 'Cosqun',
  age: 22,
  isCloseFriend: true,
};
let friends = [friend1, friend2, friend3];
for (let i = 0; i < friends.length; i++) {
  if (friends[i].isCloseFriend == true) {
    console.log(friends[i].name);
  }
}

//Task 4
let student1 = {
  name: 'Meryem',
  score: 97,
};
let student2 = {
  name: 'Ziya',
  score: 78,
};
let student3 = {
  name: 'Tural',
  score: 46,
};
let student4 = {
  name: 'Abidin',
  score: 69,
};
let student5 = {
  name: 'Medina',
  score: 85,
};
let students = [student1, student2, student3, student4, student5];

for (let i = 0; i < students.length; i++) {
  if (students[i].score < 50) {
    console.log(`${students[i].name} didn't pass the exam`);
  } else {
    console.log(`${students[i].name} passed the exam`);
  }
}

let book1 = {
  title: 'A Thousand Splendid Suns',
  author: 'Khaled Hosseini',
  isRead: true,
};
let book2 = {
  title: 'Sunlight on cold water',
  author: 'Francoise Sagan',
  isRead: false,
};
let book3 = {
  title: 'Flowers for Algernon',
  author: 'Daniel Keyes',
  isRead: true,
};
let book4 = {
  title: 'The Gadfly',
  author: 'Ethel Voynich',
  isRead: true,
};
let book5 = {
  title: 'All quiet on the Western Front',
  author: 'Erich Remarque',
  isRead: false,
};

let books = [book1, book2, book3, book4, book5];

for (let i = 0; i < books.length; i++) {
  if (books[i].isRead == true) {
    console.log(`${books[i].title} have been read`);
  }
}

let project1 = {
  title: 'BMI calculator',
  completed: true,
};
let project2 = {
  title: 'Weather app',
  completed: false,
};
let project3 = {
  title: 'Todo list',
  completed: false,
};
let project4 = {
  title: 'Password Generator',
  completed: true,
};
let project5 = {
  title: 'Rock Paper Scissors',
  completed: true,
};

let projects = [project1, project2, project3, project4, project5];

let counter = 0;
for (let i = 0; i < projects.length; i++) {
  if (projects[i].completed === true) {
    counter++;
  }
}
console.log(counter);


//Task 5
let shoppingList1 = {
  name: 't-shirt',
  price: 20,
  quantity: 2,
};
let shoppingList2 = {
  name: 'pen',
  price: 2,
  quantity: 10,
};
let shoppingList3 = {
  name: 'drink',
  price: 5,
  quantity: 5,
};
let shoppingList4 = {
  name: 'chips',
  price: 7,
  quantity: 6,
};
let shoppingList5 = {
  name: 'perfume',
  price: 68,
  quantity: 1,
};

let shoppingLists = [
  shoppingList1,
  shoppingList2,
  shoppingList3,
  shoppingList4,
  shoppingList5,
];

let sum = 0;
for (let i = 0; i < shoppingLists.length; i++) {
  sum += shoppingLists[i].price * shoppingLists[i].quantity;
}
console.log(sum);

let student1 = {
  name: 'Elina',
  grade: 94,
  attended: true,
};
let student2 = {
  name: 'Resad',
  grade: 67,
  attended: false,
};
let student3 = {
  name: 'Elmar',
  grade: 82,
  attended: false,
};

let students = [student1, student2, student3];
for (let i = 0; i < students.length; i++) {
  if (students[i].grade > 65 && students[i].attended == true) {
    console.log(`${students[i].name} successfully graduated from university`);
  }
}

