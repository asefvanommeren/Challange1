function lineChart() {

  let afstandChart = new Chart(myChart, {
    type: 'line', // bar horizontal pie line doughnut radar polararea
    data: {
      labels: ['10', '20', '30', '40', '50'],
      datasets: [{
        label: 'Aantal Km',
        data: [155, 271, 443, 718, 1122], //backgroundColor: 'green'
        //backgroundColor: ['green', 'blue', 'red', 'orange', 'pink'],
        borderWidth: 1,
        borderColor: 'black',
        hoverBorderWidth: 2,
        hoverBorderColor: 'purple',
      }]
    },
    options: {
      title: {
        display: false,
        text: 'Snelheid', //Grafieknaam
        fontSize: 20
      },
      legend: {
        display: false,
        position: 'right',
        labels: {
          //fontColor: 'black'
        }
      },
      layout: {
        padding: {
          left: 20,
          right: 35
        }
      },
      tooltips: {
        //enabled: true
      }
    }
  });
}
