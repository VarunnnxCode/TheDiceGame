function throww(){
    if(finIterate1 > finIterate2){
        document.querySelector("h1").innerHTML = "<img src='images/red-flag.png'>Player 1 Wins!"
    }
    else if(finIterate1 < finIterate2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!<img src='images/red-flag.png'>"
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!"
    }
}

function image1(){
    document.querySelectorAll("div img")[0].setAttribute("src", que1);
}

function image2(){
    document.querySelectorAll("div img")[1].setAttribute("src", que2);
}

var iterate1 = Math.random() * 6;
var finIterate1 = Math.floor(iterate1) + 1;
var que1 = "images/dice" + finIterate1 + ".png"

var iterate2 = Math.random() * 6;
var finIterate2 = Math.floor(iterate2) + 1;
var que2 = 'images/dice' + finIterate2 + '.png';

throww(finIterate1,finIterate2);
image1(que1);
image2(que2);