function pieChart() {

  let atmosChart = new Chart(myChart2, {
    type: 'pie', // bar horizontal pie line doughnut radar polararea
    data: {
      labels: ['Zuurstof', 'Stikstof', 'Argon', 'Koolstofdioxide', 'Neon'],
      datasets: [{
        label: 'AA',
        data: [60, 20, 10, 7, 3], //backgroundColor: 'green'
        backgroundColor: ['turquoise', 'green', 'red', 'grey', 'yellow'],
        borderWidth: 1,
        //borderColor: 'black',
        hoverBorderWidth: 3,
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
        position: 'right',
        labels: {
          //fontColor: 'black'
        }
      },
      layout: {
        padding: {
          left: 25,
          right: 20
        }
      },
      tooltips: {
        //enabled: true
      }
    }
  });
}
