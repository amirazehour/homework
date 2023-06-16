// Fetch the favorite quotes from local storage (assuming it's stored as JSON)
let favoriteQuotes = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];

// Get DOM elements
let button = document.querySelector(".button");
let quoteText = document.querySelector(".quote");
let author = document.querySelector(".auteur");
let deleteButtons = document.querySelectorAll(".delete-btn");

let index = 0; // Initialize the index of the current favorite quote

function displayNextFavoriteQuote() {
  if (favoriteQuotes.length > 0) {
    // Get the quote at the current index
    let quote = favoriteQuotes[index];

    // Update the quote text and author in the HTML
    quoteText.textContent = quote.quote;
    author.textContent = quote.author;

    // Increment the index for the next iteration
    index = (index + 1) % favoriteQuotes.length; // Use modulo operator to cycle through the quotes
  } else {
    // If there are no favorite quotes, display a default message
    quoteText.textContent = "No favorite quotes available";
    author.textContent = "";
  }
}

// Add event listener to the button
button.addEventListener("click", displayNextFavoriteQuote);

// Display the initial favorite quote
displayNextFavoriteQuote();

