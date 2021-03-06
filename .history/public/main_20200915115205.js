const form = document.getElementById("vote-form");

//form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const choice = document.querySelector("input[name=os]").value;

  const data = { os: choice };

  fetch("poll", {
    method: "post",
    body: JSON.stringify(data),
    headers: new Headers({ "Content-Type": "application/json" }),
  })
    .then((res) => console.log(res.json()))
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

let dataPoints = [
  { label: "Windows", y: 0 },
  { label: "MacOS", y: 0 },
  { label: "linux", y: 0 },
];

const chartContainer = document.getElementById("#chartContainer");
if (chartContainer) {
  const chart = new CanvasJS.Chart("chartContianer", {
    animationEnabled: true,
    theme: "theme1",
    title: {
      text: "OS Results",
    },
    data: [
      {
        type: "coloumn",
        dataPoints: dataPoints,
      },
    ],
  });
  chart.render();
}
