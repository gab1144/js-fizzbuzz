const container = document.querySelector('.container');
const limit = 100;
let output;

for(let i = 1; i <= limit; i++){
  output="";
  const box  =  document.createElement('div');
  box.className = 'box';
  if (i % 3 === 0){
    output="Fizz";
    box.classList.add('box-green');
  }
  if (i % 5 === 0){
    output+="Buzz";
    if (i % 3 === 0){
      box.classList.add('box-red');
    } else {
      box.classList.add('box-yellow');
    }
  }
  if (i % 3 !== 0 && i % 5 !== 0){
    output=i
    box.classList.add('box-blue');
  }
  box.innerHTML = output;
  container.append(box);
}