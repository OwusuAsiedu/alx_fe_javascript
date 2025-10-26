// === Step 1: Define Quotes Array ===
const quotes = [
  { text: "Talk is cheap. Show me the code.", category: "Programming" },
  { text: "The only way to learn a new programming language is by writing programs in it.", category: "Programming" },
  { text: "In the middle of difficulty lies opportunity.", category: "Motivation" },
  { text: "Your limitation—it’s only your imagination.", category: "Motivation" },
  { text: "Love all, trust a few, do wrong to none.", category: "Life" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];

// === Step 2: Get DOM Elements ===
const categorySelect = document.getElementById('categorySelect');
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const addQuoteBtn = document.getElementById('addQuoteBtn');
const newCategoryInput = document.getElementById('newCategory');
const newQuoteInput = document.getElementById('newQuote');

// === Step 3: Populate Categories Dropdown ===
function populateCategories() {
  categorySelect.innerHTML = '<option value="">-- Choose a category --</option>';
  const categories = [...new Set(quotes.map(q => q.category))];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

// === Step 4: Show Random Quote ===
function showRandomQuote() {
  const selectedCategory = categorySelect.value;
  if (!selectedCategory) {
    quoteDisplay.innerHTML = "<p>Please select a category first.</p>";
    return;
  }

  const categoryQuotes = quotes.filter(q => q.category === selectedCategory);
  const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
  quoteDisplay.innerHTML = `<p>"${randomQuote.text}"</p>`;
}

// === Step 5: Add New Quote Dynamically ===
function addNewQuote() {
  const newCategory = newCategoryInput.value.trim();
  const newQuote = newQuoteInput.value.trim();

  if (!newCategory || !newQuote) {
    alert("Please enter both a category and a quote.");
    return;
  }

  quotes.push({ text: newQuote, category: newCategory });
  populateCategories();
  newCategoryInput.value = "";
  newQuoteInput.value = "";
  alert(`New quote added under "${newCategory}" category!`);
}

// === Step 6: Attach Event Listeners ===
document.addEventListener('DOMContentLoaded', populateCategories);
newQuoteBtn.addEventListener('click', showRandomQuote);
addQuoteBtn.addEventListener('click', addNewQuote);