var buttons = document.querySelectorAll("button");

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
      resultat = "Win";
    }
    else {
      resultat = "Lose";
    }

    document.querySelector(".resultats").innerHTML = `
      Joueur : ${joueur} </br>
      Bot : ${bot} </br>
      <span style='color:#ADD8E6'>${resultat} !</span>
    `;

  });
}
