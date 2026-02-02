function greet(name, greeting) {
  name = name || "friend";
  greeting = greeting || "Hi";
  console.log(greeting + ", " + name + "!");
}
function greet(name = "friend", greeting = "Hi") {
  console.log(`${greeting}, ${name}!`);
}

greet(); // "Hi, friend!"
greet("Alice"); // "Hi, Alice!"
greet("Bob", "Hello"); // "Hello, Bob!"
function greet(name = "friend", greeting = "Hi") {
  console.log(`${greeting}, ${name}!`);
}

greet(); // "Hi, friend!"
greet("Alice"); // "Hi, Alice!"
greet("Bob", "Hello"); // "Hello, Bob!"