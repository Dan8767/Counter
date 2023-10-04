let count = 0;
let countDoc = document.getElementById("count")
let bton = document.getElementsByTagName("button");
function increaseCount (){
count++;
countDoc.innerHTML = count;
if(count > 0){
    countDoc.style.color = "green"
}
else if(count == 0){
    countDoc.style.color = "blue"
}

}
function resetCount(){
    count = count - count;
    countDoc.innerHTML = count;
    if(count == 0){
        countDoc.style.color = "blue"
    }
}
function decreaseCount (){
count--;
countDoc.innerHTML = count;
if(count < 0){
    countDoc.style.color = "red"
}
else if(count == 0){
    countDoc.style.color = "blue"
}
}

bton[0].addEventListener("click",decreaseCount);
bton[1].addEventListener("click",resetCount);
bton[2].addEventListener("click",increaseCount);
resetCount();

