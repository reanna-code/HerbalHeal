// script.js

function searchRemedies(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('searchInput').value;
  // You can perform additional validation or processing here if needed

  // Redirect to the results page with the search term as a query parameter
  window.location.href = `results.html?search=${searchTerm}`;
}

document.querySelector('.nav-links li:last-child a').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('bottom');
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
