/*--------------------------------------------------------------------
| CONSOLE 
| the text entry and display device for system administration messages,
| particularly those from the BIOS or boot loader,
| the kernel, from the init system and from the system logger. 
| 
| Every entity in JavaScript is an object. 
| console -> object, 
| warn, error, log, table, time -> methods
| Object.property 
| Object.method()
|
| usage -> Testing, Debugging, DOM Manipulation
|---------------------------------------------------------------------*/

console.log("Hello, World!");
console.log(123);
console.log(true);

let username = "JavaScript";
console.log(username);

let fruits = new Array("Mango", "Apple", "Pineapple");
console.log(fruits);

let student = { name: "John Doe", age: 46 };
console.table(student);

let prog = new String("Programming");
console.log("%s %s!", username, prog);

const post = {
  caption: "lorem ipsum dolor sit amet consectuter adipisicing elit.",
  images: ["39xq19D.jpg", "qioawez.jpg", "92DEaoE.jpg"],
  username: "John Doe",
  created_at: new Date().toDateString(),
};
console.table(post);

console.warn("this will throw an error in future versions.");
console.error("item failed to render at component mount");

let list = [1, 3, 5, 7, 9];

console.time("calcTime");
list.forEach((i) => {
  document.write(i, "<br />");
});
console.timeEnd("calcTime");

console.time("findTime");
for (i in list) {
  document.write(i, "<br />");
}
console.timeEnd("findTime");

 /* *** *** *** *** *** *** *** *** *** *** *** *** *** */