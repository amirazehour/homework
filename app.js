let btn = document.querySelector(".button");
let quote = document.querySelector(".quote");
let auteur = document.querySelector(".auteur");
let tweet = document.querySelector(".tweet");
const favorite = document.querySelector(".favorit");


const quotes = [
  {
    quote: `i want to win ,i do not desire to be their equal , in my heart i want to best them`,
    auteur: `holly black`,
  },
  {
    quote: `What matters is whether your habits are putting you on the path toward success`,
    auteur: `James Clear`,
  },
  {
    quote: `instead of being afraid , i will become somthing to fear`,
    auteur: `holly black`,
  },
  {
    quote: `A Place Where Someone Still Thinks Of You Is A Place You Can Call Home`,
    auteur: `jiraya`,
  },
  {
    quote: `Hard work is worthless for those that don't believe in themselves`,
    auteur: `naruto`,
  },
  {
    quote: `the one piece is real`,
    auteur: `Whitebeard`,
  },
  
  {
    quote: `" no matter how dark and ugly, there are shards of beauty if I look for them."`,
    auteur: `Anna White`,
  },
 
  {
    quote: `"You can always edit a bad page. You can't edit a blank page."`,
    auteur: `Jodi Picoult`,
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  auteur.innerText = quotes[random].auteur;
});

tweet.addEventListener("click", () => {
  let quoteText = quote.innerText;
  let author = auteur.innerText;
  let twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quoteText + " - " + author);

  window.open(twitterURL, "_blank");
});

favorite.addEventListener("click", addToFavorites);

function addToFavorites() {
  const quoteText = quote.innerText;
  const author = auteur.innerText;

  let favoriteQuotes = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];
  const newFavorite = { quote: quoteText, author: author };
  favoriteQuotes.push(newFavorite);

  localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
  console.log("Quote added to favorites.");
}