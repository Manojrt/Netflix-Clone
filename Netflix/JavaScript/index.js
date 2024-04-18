var ques = document.getElementById("Questions");
var ans = document.getElementById("answers");
var ans1 = document.getElementById("answers1");
var ans2 = document.getElementById("answers2");
var ans3 = document.getElementById("answers3");
var ans4 = document.getElementById("answers4");
var ans5 = document.getElementById("answers5");
var open01 = document.getElementById("open_icon")
var open1 = document.getElementById("open_icon1")
var open2 = document.getElementById("open_icon2")
var open3 = document.getElementById("open_icon3")
var open4 = document.getElementById("open_icon4")
var open5 = document.getElementById("open_icon5")

var emcall = document.getElementById("call");

emcall.style.cursor="pointer";

emcall.addEventListener("click",()=>
{
    confirm("Open Pick an application? \n \n https://www.netflix.com wants to open this application.");
})

function show(elem){
    if(ans.style.display=="inline-block")
    {
        ans.style.display="none";
        open01.style.rotate="0deg"
        
    }
    else
    {
        ans.style.display="inline-block";
        open01.style.rotate="45deg"
    }
    
}

function show1(elem1){
    if(ans1.style.display=="inline-block")
    {
        ans1.style.display="none"; 
        open1.style.rotate="0deg"
    }
    else
    {
        ans1.style.display="inline-block";
        open1.style.rotate="45deg"
    }
}
function show2(elem2){
    if(ans2.style.display=="inline-block")
    {
        ans2.style.display="none"; 
        open2.style.rotate="0deg"
    }
    else
    {
        ans2.style.display="inline-block";
        open2.style.rotate="45deg"
    }
}

function show3(elem3){
    if(ans3.style.display=="inline-block")
    {
        ans3.style.display="none"; 
        open3.style.rotate="0deg"
    }
    else
    {
        ans3.style.display="inline-block";
        open3.style.rotate="45deg"
    }
}

function show4(elem4){
    if(ans4.style.display=="inline-block")
    {
        ans4.style.display="none"; 
        open4.style.rotate="0deg"
    }
    else
    {
        ans4.style.display="inline-block";
        open4.style.rotate="45deg"
    }
}
function show5(elem5){
    if(ans5.style.display=="inline-block")
    {
        ans5.style.display="none";
         open5.style.rotate="0deg"
    }
    else
    {
        ans5.style.display="inline-block";
        open5.style.rotate="45deg"
    }
}
