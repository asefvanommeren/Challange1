function pieChart() {

  let atmosChart = new Chart(myChart2, {
    type: 'pie', // bar horizontal pie line doughnut radar polararea
    data: {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [{
        label: 'AA',
        data: [111, 222, 333, 444, 555], //backgroundColor: 'green'
        //backgroundColor: ['green', 'blue', 'red', 'orange', 'pink'],
        borderWidth: 1,
        //borderColor: 'black',
        hoverBorderWidth: 2,
        hoverBorderColor: 'purple',
      }]
    },
    options: {
      title: {
        display: true,
        //text: 'Snelheid', //Grafieknaam
        fontSize: 20
      },
      legend: {
        position: 'right',
        labels: {
          //fontColor: 'black'
        }
      },
      layout: {
        padding: {
          left: 20,
          right: 20
        }
      },
      tooltips: {
        //enabled: true
      }
    }
  });
}
