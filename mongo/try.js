const labs = [
  {location: 'Bewkes 107', seats: 15},
  {location: 'Bewkes 109', seats: 25},
  {location: 'Bewkes 144', seats: 7}
];

// A. Generate a new array containing the seat numbers of all the labs (by invoking the built-in map method).
const seat=labs.map(lab=>lab.seats)

// B. Generate a new array containing only the labs with more than 10 seats (by invoking the built-in filter method).
const more_than_10_lab=labs.filter(lab=>lab.seats>10)

// C. Sort the existing array in order of (increasing) seat numbers (by invoking the built-in sort method).
labs=labs.sort((a,b)=>a.seats-b.seats)
console.log(seat)
console.log(more_than_10_lab)
console.log(labs)
