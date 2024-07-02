
const character = "#";
const count = 8;
const rows = [];
let inverted = true;

// cette fonction permet de créer la ligne
function padRow(rowNumber, rowCount) {

  /*
  sa façon de fonctionner: 
  diviser la ligne en 3 sections (2 distinctes) et la retourner comme valeur finale
  section 1 : prendre le total de ligne demandée dans const count - la ligne actuel (exemple: 8-1 = 7)
  section 2 : répéter le caractère qui constitue la pyramide (exemple: 2 * 1 - 1 = 1)
  section 3 : prendre le total de ligne demandée - la ligne actuel (exemple: 8-1 = 7)
  */
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }


  // variable initée à 1 ; tant que la variable est plus petite ou égale à 1; ajouter 1
  for (let i = 1; i <= count; i++) {

    if (inverted) {
      // si à l'envers, envoyer au début le résultat de padrow avec variable initiée et count final
      rows.unshift(padRow(i, count));
      
    } else {
      // si à l'endroit, envoyer à la fin le résultat de padrow avec variable initiée et count final
      rows.push(padRow(i, count));
    }
  }
  
  let result = ""
  
  for (const row of rows) {
    result = result + "\n" + row;
  }
  
  console.log(result);