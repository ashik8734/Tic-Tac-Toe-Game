let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

// Draw Condition:
let count=0;

const showdraw=()=>{
    msg.innerText="Game is Draw";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       if(turnO==true){
        box.innerText="O"
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;

       }
       box.disabled=true;
       checkWinner();
       count++;
       if(count==9){
        showdraw();
       }
    })
});

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}

const disabledBoxes=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congarulations Winner is , ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner=()=>{
    for(let patterns of winPatterns){
        
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);





