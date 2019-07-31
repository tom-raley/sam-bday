function getQuote() {
  fetch('https://complimentr.com/api')
  .then(response => response.json())
  .then((myJson) => document.getElementById("quote").innerHTML = `"${myJson.compliment.charAt(0).toUpperCase() + myJson.compliment.slice(1)}."`);
}

document.getElementById("compliment-button").onclick = getQuote;