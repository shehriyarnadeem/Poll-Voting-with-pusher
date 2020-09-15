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
    .then((res) => res.json())

    .catch((err) => console.log(err));
});

let dataPoints = [
  { label: "Windows", y: 0 },
  { label: "MacOS", y: 0 },
  { label: "linux", y: 0 },
];

const chartContainer = document.querySelector("#chartContainer");

const chart = new CanvasJS.Chart(document.querySelector("#chartContainer"), {
  title: {
    text: "OS Results",
  },
  data: [
    {
      type: "column",
      dataPoints: dataPoints,
    },
  ],
  chart.render();
});


Pusher.logToConsole = true;

const pusher = new Pusher("a27a1c3ea2be7b8033b6", {
  cluster: "ap2",
});

var channel = pusher.subscribe("os-poll");
channel.bind("os-vote", function (data) {
  console.log(data, "data");
  dataPoints = dataPoints.map((x) => {
    if (x.label === data.os) {
      x.y += data.points;
      console.log(x, "x");
      return x;
    } else {
      return x;
    }
  });
  // alert(JSON.stringify(data));
});
