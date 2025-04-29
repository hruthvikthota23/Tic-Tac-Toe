let boxes=document.querySelectorAll(".box");
let player=document.querySelector(".turn")
let gamestart=document.querySelector(".start-btn");
let restart=document.querySelector(".restart-btn");

let turn="X";
let gameOver=false;
let winconditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let start=false;
gamestart.addEventListener("click",()=>{
    start=true;
    gamestart.innerHTML="Game is On"
    restart.style.display="inline"
if(start){
    player.innerHTML=turn+" - Player turn"
    boxes.forEach(box =>{
        box.addEventListener("click",function(){
            if(!gameOver&&box.innerHTML==""){
                box.innerHTML=turn;
                turn=turn=="X"?"O":"X";
                player.innerHTML=turn+" - Player turn"
            }
            for(let i=0;i<winconditions.length;i++){
                let a=boxes[winconditions[i][0]].innerHTML;
                let b=boxes[winconditions[i][1]].innerHTML;
                let c=boxes[winconditions[i][2]].innerHTML;
                if(a!=""&&a==b&&b==c){
                    player.innerHTML=a+" won the match";
                    restart.innerHTML="Play Again";
                    restart.style.background="green";
                    gamestart.style.display="none";
                    gameOver=true;
                }
            }         
        })
        restart.addEventListener("click",()=>{
            restart.innerHTML="Restart";
            restart.style.background="red";
            gamestart.style.display="inline";
            box.innerHTML="";
            player.innerHTML="";
            gameOver=false;
        })
    })    
}
})


