let pannel1 = document.querySelector(".pannel1");
let pannel2 = document.querySelector(".pannel2");
let pannel3 = document.querySelector(".pannel3");

let submit = document.getElementById("submit");

let username = document.getElementById("username");
let greeting = document.querySelector(".greeting");
let yes = document.getElementById("yes");
let no = document.getElementById("no");

let home = document.getElementById("home");


// on click of submit button
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    var username = document.getElementById("username").value;
    if(username!=""){
        pannel1.style.display = "none";
        pannel2.style.display = "flex";
        pannel3.style.display = "none";
        greeting.innerHTML = "Hiii "+ username +" !";

    }else{
        alert("please enter your name");
    }
})

no.addEventListener("mouseover",()=>{
    no.style.position = "absolute";
    no.style.top = Math.floor(Math.random() * 80) + "vh";
    no.style.left = Math.floor(Math.random() * 60) + "vw";
})

yes.addEventListener("click", ()=>{
    pannel2.style.display = "none";
    pannel3.style.display = "flex";
    no.style.position = "static"; // Reset position to default
    no.style.top = originalNoPosition.top + "px";
    no.style.left = originalNoPosition.left + "px";
})

home.addEventListener("click",()=>{
    pannel1.style.display = "flex";
})



// gify animation for second pannel
const gifContainer = document.querySelector('.shy-gifs');
const gifUrls = ['shy2.gif', 'shy3.gif', 'shy4.gif', 'shy5.gif', 'shy6.gif', 'shy7.gif', 'shy8.gif'];
let currentGifIndex = 0;

function showNextGif() {
    const currentGif = gifContainer.querySelector('img.active');
    if (currentGif) {
        currentGif.classList.remove('active');
    }

    if (currentGifIndex >= gifUrls.length) {
        currentGifIndex = 0;
    }

    const newGif = document.createElement('img');
    newGif.src = gifUrls[currentGifIndex];
    newGif.alt = 'Duddu';
    newGif.classList.add('active');
    gifContainer.appendChild(newGif);

    currentGifIndex++;
    setTimeout(showNextGif, 3000); // Adjust the delay (in milliseconds) as needed
}

// Start the animation
showNextGif();

