let answer = 0;

for (let i = 1; i < 101; i++) {
  answer += i;
}
console.log("for: answer = " + answer);


answer = 0;
let i = 1;
while(i < 101) {
  answer += i;
  i++;
}
console.log("while: answer = " + answer);


answer = 0;
i = 1
do {
  answer += i;
  i++;
} while (i < 0);
console.log("do while: answer = " + answer);


