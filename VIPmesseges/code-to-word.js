function analyze() {
  const text = document.getElementById('Input').value.toLowerCase();
  const letters = {
    "1f%": "a",
    "2f%": "b",
    "3f%": "c",
    "4f%": "d",
    "5f%": "e",
    "6f%": "f",
    "7f%": "g",
    "8f%": "h",
    "9f%": "i",
    "10f%": "j",
    "11f%": "k",
    "12f%": "l",
    "13f%": "m",
    "14f%": "n",
    "15f%": "o",
    "16f%": "p",
    "17f%": "q",
    "18f%": "r",
    "19f%": "s",
    "20f%": "t",
    "21f%": "u",
    "22f%": "v",
    "23f%": "w",
    "24f%": "x",
    "25f%": "y",
    "26f%": "z",
     "0f%": " "
  };

  let dis = "";
  const regex = /(\d{1,2}f%)/g;
  const codes = text.match(regex);

  if (!codes) {
    dis = "#!";
  } else {
    for (let code of codes) {
      if (letters[code]) {
        dis += letters[code];
      } else if (letters === " "){
        dis += " ";
      }
      else {
        dis += "#!";
      }
    }
  }

  document.getElementById("result").innerHTML = dis;
}




// les espase mamgadch