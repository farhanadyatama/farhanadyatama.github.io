alert("SELAMAT BERMAIN");

let player1; 
let player2; 

document.getElementById("tombol").onclick = setNama;

function setNama() {
    player1 = prompt("Input Nama Player 1:");
    if (player1 != "") {
        document.getElementById("player1").innerHTML = " " + player1;
    }

    player2 = prompt("Input Nama Player 2:");
    if (player2 != "") {
        document.getElementById("player2").innerHTML = " " + player2;
    }
}

document.getElementById("start").onclick = play;

function play() {
    // Player 1
    var randomNumber1 = Math.floor(Math.random() * 3) + 1;
    var randomHandimage = "hand" +randomNumber1 + ".png";
    var randomImageSource = "img/" +randomHandimage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    // Player 2
    var randomNumber2 = Math.floor(Math.random() * 3) + 1;
    var randomImageSource2 = "img/hand" + randomNumber2 + ".png";
    image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    
    
    if (randomNumber1 == 1 && randomNumber2 == 2) {
      document.querySelector("h2").innerHTML = "" + player1 + " WIN 👑";
    } else if (randomNumber1 == 1 && randomNumber2 == 3) {
      document.querySelector("h2").innerHTML = "" + player2 + " WIN 👑";
    } else if (randomNumber1 == 2 && randomNumber2 == 1) {
      document.querySelector("h2").innerHTML = "" + player2 + " WIN 👑";
    } else if (randomNumber1 == 2 && randomNumber2 == 3) {
      document.querySelector("h2").innerHTML = "" + player1 + " WIN 👑";
    } else if (randomNumber1 == 3 && randomNumber2 == 1) {
      document.querySelector("h2").innerHTML = "" + player1 + " WIN 👑";
    } else if (randomNumber1 == 3 && randomNumber2 == 2) {
      document.querySelector("h2").innerHTML = "" + player2 + " WIN 👑";
    }
    else {
      document.querySelector("h2").innerHTML = "DRAW";
    }
}