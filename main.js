const quote = document.getElementById("quote");
const author = document.querySelector(".name");
const btn = document.querySelector("button");
const whatsappBtn = document.querySelector(".whatsapp");

const url = "https://mrr-apifrases.herokuapp.com/randoms";
const url1 = "Acesse esse link para mais frases: " + "Em breve";

btn.addEventListener("click", getQuote);

function getQuote() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = data.frase;
        author.innerHTML = data.autor;
    })
};

whatsappBtn.addEventListener("click", () => {
    let wppUrl = `https://api.whatsapp.com/send?text=${quote.innerText} + ${url1}`;
    window.open(wppUrl,"_blank");
});

window.addEventListener("load", getQuote);