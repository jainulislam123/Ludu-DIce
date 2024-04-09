

let b = true;
 let saheb = new Audio('saheb.mp3')
let ludu = document.querySelector(".ludu")
let playbtn = document.querySelector(".playbtn");
let showR = document.querySelector("#showR");
playbtn.addEventListener("click",()=>{
    let rand = (Math.random()*5+1);
    let a = Math.round(rand);
    setTimeout(() => {
        showR.innerHTML= a;
    }, 1700);
 
    if(a===1){
        ludu.style.backgroundPosition="-7px -4px";
    }
    if(a===2){
        ludu.style.backgroundPosition="217px -4px";
       
    }
    if(a===3){
        ludu.style.backgroundPosition="105px -4px";
        
    }
    if(a===4){
        ludu.style.backgroundPosition="-6px 105px";
    }
    if(a===5){
        ludu.style.backgroundPosition="215px 343px";
    }
    if(a===6){
        ludu.style.backgroundPosition="106px 105px";
    }
    // console.log(a);
    if(b==true){
     ludu.style.animation= "dice 2s linear";
     b=false
    }else{
        ludu.style.animation= "dice2 2s ease-in-out "; 
        b=true
    }
    saheb.play()
});

ludu.onmouseover =()=>{  
        showR.innerHTML= "1"; 
        ludu.style.backgroundPosition="-7px -4px"; 
}
ludu.onmouseleave =()=>{  
        showR.innerHTML= "Score"; 
        ludu.style.backgroundPosition="-7px 47px"
}