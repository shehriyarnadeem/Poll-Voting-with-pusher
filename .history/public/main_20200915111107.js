const form = document.getElementById("vote-form");

form.addEventListener("submit", (e) => {
  const choice = document.querySelector("input[name=os]:checked").value;
  const data = { os: choice };

  fetch("http//localhost:3000/poll", {
    method: "post",
    body: JSON.stringify(data),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  e.preventDefault();
});
