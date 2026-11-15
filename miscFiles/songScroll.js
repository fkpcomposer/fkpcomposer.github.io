const text = '{"name":"John","age":30,"city":"New York"}';

// Convert the text to JSON
const person = JSON.parse(text);
let name = person.name;

document.getElementById("demo").textContent = "His name is " + name;
