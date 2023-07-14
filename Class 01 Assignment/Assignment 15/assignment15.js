// Store a list of people to invite to dinner
var guestlist = String[''] = ["Abrar", "Laiba", "Sheikh"];
// Print an invitation message to each person
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear " + guest + ", I am plan a dinner party. I hope you can avail yourself, I will highly appreciate that.");
}
console.log("Good news! I found a best dinner place.");
// Add a new guest to the beginning of the array
guestlist.unshift("Warisha");
// Add a new guest to the middle of the array
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Mariyam");
// Append a new guest to the end of the array
guestlist.push("Yusra");
// Print a new set of invitation messages
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    console.log("Dear " + guest + ", I am plan a dinner party. I hope you can avail yourself, I will highly appreciate that.");
}
