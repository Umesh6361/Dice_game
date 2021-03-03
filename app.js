//dice game by Dev_umesh
var random_num=Math.floor(Math.random()*6)+1;//1 to 6
var randomdiceimg="dice"+random_num+".png"; // dice1.png to dice6.png
var randomimgsrc="assets/"+randomdiceimg;//assets/dice1.png to assets/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsrc);

var random_num1=Math.floor(Math.random()*6+1);
var randomdiceimg1="dice"+random_num1+".png";
var randomimgsrc1="assets/"+randomdiceimg1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimgsrc1);
if(random_num>random_num1){
document.querySelector("h1").innerHTML="Player 1 Wins"
}
else if(random_num<random_num1){
    document.querySelector("h1").innerHTML="Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML="Draw Match"
}

function refresh(){
    window.location.reload();
}
