const form = document.getElementById("vote-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const choice = document.querySelector("input[name=os]").value;
  console.log(document.querySelector("input[name=os]").value);
  // const data = { os: choice };

  // fetch("http//localhost:8080/poll", {
  //   method: "post",
  //   body: JSON.stringify(data),
  //   headers: new Headers({ "Content-Type": "application/json" }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
});
