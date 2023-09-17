 function homeOnePoint(){
     let homeCurrentScore = document.getElementById("home-board").innerText
      homeCurrentScore= parseInt(homeCurrentScore) + 1;
      document.getElementById("home-board").innerText = homeCurrentScore;
 }
 function homeTwoPoint(){ 
    let homeCurrentScore = document.getElementById("home-board").innerText
    homeCurrentScore= parseInt(homeCurrentScore) + 2;
    document.getElementById("home-board").innerText = homeCurrentScore;
}

function homeThreePoint(){
    let homeCurrentScore = document.getElementById("home-board").innerText
    homeCurrentScore= parseInt(homeCurrentScore) + 3;
    document.getElementById("home-board").innerText = homeCurrentScore;
}

function guestOnePoint(){
    let guestCurrentScore = document.getElementById("guest-board").innerText
    guestCurrentScore= parseInt(guestCurrentScore) + 1;
    document.getElementById("guest-board").innerText = guestCurrentScore;
}
function guestTwoPoint(){
    let guestCurrentScore = document.getElementById("guest-board").innerText
    guestCurrentScore= parseInt(guestCurrentScore) + 2;
    document.getElementById("guest-board").innerText = guestCurrentScore;
}
function guestThreePoint(){
    let guestCurrentScore = document.getElementById("guest-board").innerText
    guestCurrentScore= parseInt(guestCurrentScore) + 3;
    document.getElementById("guest-board").innerText = guestCurrentScore;
}
function resetGame(){
    document.getElementById("home-board").innerText = 0;
    document.getElementById("guest-board").innerText = 0;
}

