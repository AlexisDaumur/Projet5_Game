var buttons = document.querySelectorAll("button");
let scoremoi = 0;
let scorebot = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var joueur = buttons[i].innerHTML;
    var bot = buttons[Math.floor(Math.random() * buttons.length)].
      innerHTML;
    let resultat = "";

    if (joueur === bot) {
      resultat = "Egalité";
    }
    else if ((joueur === "Pierre" && bot === "Ciseaux") || (joueur
     === "Feuille" && bot === "Pierre") || (joueur === "Ciseaux" && bot
    === "Feuille")) {
      resultat = "Gagné";
      scoremoi = scoremoi+1;
    }
    else {
      resultat = "Bouuh Perdu";
      scorebot = scorebot+1;
    }

    document.querySelector(".resultats").innerHTML = `
      Moi : ${joueur} </br>
      Bot : ${bot} </br>
      <span style='color:#ADD8E6'>${resultat} !</span>`;

    document.querySelector(".score").innerHTML = `
      Moi : <span style='color:#ADD8E6'>${scoremoi}</span> </br>
      Bot : <span style='color:#ADD8E6'>${scorebot}</span> </br> `;

    if (scoremoi === 5) {
      confirm("Gagné !! \n Clic sur Ok pour rejouer !");
      javascript:window.location.reload();
    }
    else if (scorebot === 5) {
      confirm("Perdu !! \n Clic sur Ok pour rejouer !");
      javascript:window.location.reload();
    }

  });

}
