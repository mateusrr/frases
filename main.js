const quote = document.getElementById("quote");
const author = document.querySelector(".name");
const btn = document.querySelector("button");
const twitterBtn = document.querySelector(".whatsapp");

const url = "https://mrr-apifrases.herokuapp.com/amor";
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

const pictures = getQuote();
twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://api.whatsapp.com/send?text=${quote.innerText} + ${url1}`;
    window.open(tweetUrl,"_blank");
});

window.addEventListener("load", getQuote);