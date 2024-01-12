alert("game will end when points reach 10");
let a=document.querySelector("#box21");
let b=document.querySelector("#box22");
let c=document.querySelector("#box23");

let d=document.querySelector("#box11");
let e=document.querySelector("#box13");

let pu=document.querySelector("#user");
let pc=document.querySelector("#comp");

let a1,pus=0,pco=0;

a.onclick=()=>{
    d.style.backgroundImage="url('https://m.media-amazon.com/images/I/51Zv1ZT2otL._SX679_.jpg')";
    d.style.backgroundSize="cover";
    a1=1;
    rando();
}
b.onclick=()=>{
    d.style.backgroundColor="green";
    a1=2;
    rando();
    d.style.backgroundImage="url('https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F591%2Frust-resistant-waterproof-and-eco-friendly-400-gsm-brown-craft-paper-sheet-459.jpg&w=384&q=15')";
    d.style.backgroundSize="cover";
}
c.onclick=()=>{
    d.style.backgroundColor="blue";
    a1=3;
    d.style.backgroundImage="url('https://previews.123rf.com/images/phonlamaiphoto/phonlamaiphoto1610/phonlamaiphoto161003104/64750041-brown-stone-background-with-rough-texture.jpg')";
    d.style.backgroundSize="cover";
    rando();
}

function rando(){
    if(pus==10||pco==10){
        if(pus==10){
            location.replace("userwin.html");
        }  
        else{
            location.replace("win.html");
        }
    }
    let b1=Math.floor(Math.random()*10);
    if(b1%2==0){
        find(a1,2);  
        e.style.backgroundImage="url('https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F591%2Frust-resistant-waterproof-and-eco-friendly-400-gsm-brown-craft-paper-sheet-459.jpg&w=384&q=15')";
        e.style.backgroundSize="cover";
    }
    else if(b1%3==0){
        find(a1,3);    
        e.style.backgroundImage="url('https://previews.123rf.com/images/phonlamaiphoto/phonlamaiphoto1610/phonlamaiphoto161003104/64750041-brown-stone-background-with-rough-texture.jpg')";
        e.style.backgroundSize="cover";
    }
    else{
        e.style.backgroundImage="url('https://m.media-amazon.com/images/I/51Zv1ZT2otL._SX679_.jpg')";
        e.style.backgroundSize="cover";
        find(a1,1);
    }

}

function find(a1,b1){

    if(a1==1){
        if(b1==2){
            pus++;
            pu.innerText="User:"+pus.toString();
        }
        else if(b1==3){
            pco++;
            pc.innerText="Computer:"+pco.toString();
        }
    }
    else if(a1==2){
        if(b1==3){
            pus++;
            pu.innerText="User:"+pus.toString();
        }
        else if(b1==1){
            pco++;
            pc.innerText="Computer:"+pco.toString();
        }
    }
    else if(a1==3){
        if(b1==1){
            pus++;
            pu.innerText="User:"+pus.toString();
        }
        else if(b1==2){
            pco++;
            pc.innerText="Computer:"+pco.toString();
        }
    }
}
