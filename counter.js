
const countBtn = document.querySelector(".count");
const resetBtn = document.querySelector(".reset");
let countNum = document.querySelector(".num");

countBtn.addEventListener('click',countf);
resetBtn.addEventListener('click',resetf);

function countf(){
	countNum.innerHTML++;
}

function resetf(){
	countNum.innerHTML=0;
}


