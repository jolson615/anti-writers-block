// Array Iteration

// filter, map, foreach / for of, [stretch: reduce]

// Level 1: input array of words

fav_foods = ["Cheeseburger", "Ramen", "Tamales", "Bulgogi", "Donuts"];

// Produce this: ["⭐️CHEESEBURGER⭐️","⭐️RAMEN⭐️","⭐️TAMALES⭐️","⭐️BULGOGI⭐️","⭐️DONUTS⭐️"]

// Produce a shortened list of just the words with the letter "e" in them.

// Produce nothing, but console log the sentence "I like ______" 5 times, with a food filling the blank each time.

// Produce the total number of letters in all five strings combined.

// Produce a shorter list of all the words at least 7 letters long.

// Produce this: ["C","R","T","B","D"]

// Level 2: input array of objects ^do each one once, 2x map.

const people = [
  {
    name: "Yhadira",
    nickname: "Deary",
    age: 18,
    animal: "Cat",
    born: "Queens",
  },
  {
    name: "Kadiatou",
    nickname: "Kadi-B",
    age: 17,
    animal: "Ferret",
    born: "The Bronx",
  },
  {
    name: "Isiah",
    nickname: "Izzy",
    age: 16,
    animal: "Dog",
    born: "Manhattan",
  },
  {
    name: "Yadelin",
    nickname: "Loki",
    age: 19,
    animal: "Sloth",
    born: "The Bronx",
  },
  {
    name: "Darius",
    nickname: "Yaddy",
    age: 17,
    animal: "Zebra",
    born: "Brooklyn",
  },
  {
    name: "Jocelyn",
    nickname: "JayJay",
    age: 15,
    animal: "Fennec Fox",
    born: "Staten Island",
  },
];

// Find the average age.

// Create a smaller list of just the people who are at least 18.

// Produce this: ['Yhadira', 'Kadiatou', 'Isiah', 'Yadelin', 'Darius', 'Jocelyn']
const firstNames = people.map((person) => person.name);
console.log(firstNames);

// Produce this:
// ['<p>a Cat for Yhadira!</p>', '<p>a Ferret for Kadiatou!</p>', '<p>a Dog for Isiah!</p>', '<p>a Sloth for Yadelin!</p>', '<p>a Zebra for Darius!</p>', '<p>a Fennec Fox for Jocelyn!</p>']
const nameMap = people.map(
  (person) => `<p>a ${person.animal} for ${person.name}!</p>`
);
console.log(nameMap);

// Create a smaller list of just the people from The Bronx or Brooklyn.

// Stretch:

// With this starting object, count the number of occurrences of each vowel in the people's names and nicknames combined.
const vowelCount = { a: 0, e: 0, i: 0, o: 0, u: 0 };

// Extra Stretch:

// Count the occurrences of all 26 letters of the alphabet in the people's names and nicknames combined.
