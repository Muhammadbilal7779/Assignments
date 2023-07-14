var namecases = "Sheikh Bilal";
console.log("Lowercase: " + namecases.toLowerCase());
console.log("Uppercase: " + namecases.toUpperCase());
// Titlecase conversion function
var toTitleCase = function (str) {
    return str.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
    });
};
console.log("TitleCase: " + toTitleCase(namecases));
