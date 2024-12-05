const QUOTES = [
  {
    quote: "Lorem Ipsum",
    author: "Author1",
    year: "2022",
  },
  {
    quote: "Lorem Ipsum",
    author: "Author2",
    year: "2024",
  },
  {
    quote: "Lorem Ipsum",
    author: "Author3",
    year: "2021",
  },
]
const getQuoteTemplate = () => {
  return `<div class="quote-block">
  <blockquote>${quote}</blockquote>
  <p>~${author}-${year}</p>
      </div>
    </div> `;
}
const quoteList = document.querySelector(`#quotes-liest`)
quotesList.innerHTML += getQuoteTemplate("Hola", "Hola", 1900)
for (let i = 0; i < QUOTES.length; i++) {
  const quoteElement = QUOTES[i];
  quotesList.innerHTML += getQuoteTemplate(quoteElement.quote, quoteElement.author, quoteElement.year);
}