randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
document.querySelector(".img1").setAttribute("src","dice"+randomNumber1+".png");
randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}

