var canvas=document.getElementById("id1");
var canvas1=canvas.getContext("2d");

var wc = canvas.getClientWidth();
var hc = canvas.getClientHeight();

var rectlong = wc - 40;
var rectlarg = hc - 40;

canvas1.fillStyle = "green";
canvas1.fillRect(5, 5, 100, 200);

canvas1.strokeRect(400,250,200,100);

var bol = prompt("Effacer");
if(bol == 1)
    canvas1.clearRect(30,30,50,100);


//Premier drapeau 
function init(){
    var Cvas = document.getElementById("id1");
    var ctx = Cvas.getContext("2d");

    ctx.fillStyle = "yellow";
    ctx.fillRect(50,50,100,200);

    ctx.fillStyle = "blue";
    ctx.fillRect(40,40,160/3,100);

    ctx.fillStyle = "white";
    ctx.fillRect(40+160/3,40,160/3,100);

    ctx.fillStyle = "red";
    ctx.fillRect(40+320/3, 40, 160/3, 100)

    ctx.lineWidth = 2;
    ctx.strokeRect(30,30,180,120);
}
//Second drapeau
function ModifIt(){
ctx.fillStyle = "red";
ctx.fillRect(440,40,200,100);

ctx.fillStyle = "white";
ctx.fillRect(530,50,20,80);
ctx.fillRect(500,80,80,20);

ctx.lineWidth = 7;
ctx.StrokeStyle = "green";
ctx.strokeRect(430,30,220,120);
}

