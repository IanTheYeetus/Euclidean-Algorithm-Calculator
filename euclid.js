let OrigoNumber1 = 72663
let OrigoNumber2 = 69
let y = OrigoNumber2;
let x = OrigoNumber1
for (console.log("Working..."); x != y && x != 0 && y != 0;) {
if( x > y) {
    x = x % y;
    console.log(x);
} else if( x < y){
    y = y % x;
    console.log(y);
}
}
console.log("The biggest common divider of " + OrigoNumber1 + " and " + OrigoNumber2 + " is " + Math.max(x,y) + ".")