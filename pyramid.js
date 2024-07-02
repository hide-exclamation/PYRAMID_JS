 // cette nouvelle version contient l'ensemble des éléments nécessaires dans une seule fonction

 function createPyramid(character, stages, cote) {

    const rows = [];
    let result = ""

    function padRow(rowNumber, rowCount) {
        return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
      }
      
      for (let i = 1; i <= stages; i++) {

        if (cote == "inverted") {
          rows.unshift(padRow(i, stages));
        } else {
          rows.push(padRow(i, stages));
        }
      }

      for(const row of rows) {
        result = result + "\n" + row;
      }

      return result;
  }

  console.log(createPyramid("%", 14, "inverted"));