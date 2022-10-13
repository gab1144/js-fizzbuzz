const limit = 100;
let output;

for(let i = 1; i <= limit; i++){
  output="";
  if (i % 3 === 0){
    output="Fizz";
  }
  if (i % 5 === 0){
    output+="Buzz";
  }
  if (i % 3 !== 0 && i % 5 !== 0){
    output=i
  }
  console.log(output)
}