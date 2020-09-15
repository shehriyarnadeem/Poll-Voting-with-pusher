const form = document.getElementById("vote-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const choice = document.querySelector("input[name=os]").value;

  const data = { os: choice };

  fetch("poll", {
    method: "post",
    body: JSON.stringify(data),
    headers: new Headers({ "Content-Type": "application/json" }),
  })
    .then((res) => console.log(res))
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
