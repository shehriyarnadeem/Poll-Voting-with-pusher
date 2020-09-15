const form = document.getElementById("vote-form");

form.addEventListener("submit", (e) => {
  const choice = document.querySelector("input[name=os]:checked").nodeValue;
  e.preventDefault();
});
