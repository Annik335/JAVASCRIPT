
let a = 0, b = 1;
const n = 10; 
for (let i = 0; i < n; i++) {
    console.log(a); 
    let next = a + b; 
    a = b; 
    b = next; }
