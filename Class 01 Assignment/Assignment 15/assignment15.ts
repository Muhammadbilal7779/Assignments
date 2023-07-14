// Store a list of people to invite to dinner
const guestlist = String[''] = ["Abrar", "Laiba", "Sheikh"]

// Print an invitation message to each person
for (const guest of guestlist){
    console.log("Dear " + guest + ", I am plan a dinner party. I hope you can avail yourself, I will highly appreciate that.");
}

console.log("Good news! I found a best dinner place.")

// Add a new guest to the beginning of the array
guestlist.unshift("Warisha");

// Add a new guest to the middle of the array
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Mariyam");

// Append a new guest to the end of the array
guestlist.push("Yusra");


// Print a new set of invitation messages
for (const guest of guestlist){
    console.log("Dear " + guest + ", I am plan a dinner party. I hope you can avail yourself, I will highly appreciate that.");
}