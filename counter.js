const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
let a = 0;

plus.addEventListener("click", () => {
  a++;
  if (a < 10) {
    a = "0" + a;
  }
  num.innerText = a;
});
minus.addEventListener("click", () => {
  if (a >= 1) {
    a--;
    if (a < 10) {
      a = "0" + a;
    }
  }
  
  num.innerText = a === 0 ? '00' : a;
});
