// Initial array of quotes
let quotes = [
  { text: "The best way to predict the future is to create it.", category: "Motivation" },
  { text: "Simplicity is the ultimate sophistication.", category: "Philosophy" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
];

// Function to show a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `<p>"${quote.text}"</p><em>— ${quote.category}</em>`;
}

// Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newQuoteText === "" || newQuoteCategory === "") {
    alert("Please enter both a quote and category!");
    return;
  }

  const newQuote = { text: newQuoteText, category: newQuoteCategory };
  quotes.push(newQuote);

  // Clear inputs
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";

  alert("New quote added successfully!");
  showRandomQuote(); // show new quote
}

// Event Listeners
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("addQuoteButton").addEventListener("click", addQuote);

// Show a random quote when the page loads
window.onload = showRandomQuote;