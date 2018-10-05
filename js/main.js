var lineChartData = {
  labels: [
    "Apr 01",
    "Apr 02",
    "Apr 03",
    "Apr 04",
    "Apr 05",
    "Apr 06",
    "Apr 07"
  ],
  datasets: [
    {
      label: "This month",
      borderColor: "#1B75BB",
      fill: false,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      yAxisID: "y-axis-1"
    },
    {
      label: "Last month",
      borderColor: "#FAD961",
      fill: false,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      yAxisID: "y-axis-2"
    }
  ]
};

window.onload = function() {
  var ctx = document.getElementById("myChart").getContext("2d");
  window.myLine = Chart.Line(ctx, {
    data: lineChartData,
    options: {
      responsive: true,
      hoverMode: "index",
      stacked: false,
      title: {
        display: false,
        text: "Chart.js Line Chart - Multi Axis"
      },
      scales: {
        yAxes: [
          {
            type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: "left",
            id: "y-axis-1"
          },
          {
            type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: false,
            position: "right",
            id: "y-axis-2",

            // grid line settings
            gridLines: {
              drawOnChartArea: false // only want the grid lines for one axis to show up
            }
          }
        ]
      }
    }
  });
};
function randomScalingFactor() {
  return Math.random(rand(-100, 100));
}
function rand(min, max) {
  var seed = this._seed;
  min = min === undefined ? 0 : min;
  max = max === undefined ? 1 : max;
  this._seed = (seed * 9301 + 49297) % 233280;
  return min + (this._seed / 233280) * (max - min);
}
