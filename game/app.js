let gameseq=[];
let userseq=[];
let btns=["yellow", "pink","red", "blue"];
let started = false;
let level=0;
let h2=document.querySelector("h2")
 

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started= true;
        levelup();

    }
});
 
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
}
 
function levelup(){
    userseq = [];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random() * 3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);


 }

 function checkAns (idx){
    //console.log("curr level:", level);
    
     
    
    if(userseq[idx] === gameseq[idx]){
       if(userseq.length == gameseq.length){
       setTimeout(levelup,1000);

       }
    }else{
        h2.innerHTML=`Game Over! Your score was <b> ${level} </b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor ="red";
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";

        }, 150);
        reset();

    }

 }
 function btnPress(){
   // console.log(this);
    let btn=this;
    userflash(btn);
    userColor= btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    
    checkAns(userseq.length-1);


 }

 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 function reset(){
    started = false;
    
    gameseq =[];
    userseq =[];
    level =0;
 }